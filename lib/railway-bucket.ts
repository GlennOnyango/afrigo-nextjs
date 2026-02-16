import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const QR_OBJECT_PREFIX = "referrals";

type BucketConfig = {
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  bucketName: string;
  region: string;
};

let cachedConfig: BucketConfig | null | undefined;
let cachedClient: S3Client | null | undefined;

function cleanEnvValue(value?: string) {
  if (!value) {
    return "";
  }
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function firstDefined(...values: Array<string | undefined>) {
  return values.map(cleanEnvValue).find((value) => value.length > 0) || "";
}

function resolveBucketConfig() {
  if (cachedConfig !== undefined) {
    return cachedConfig;
  }

  const accessKeyId = firstDefined(
    process.env.RAILWAY_BUCKET_ACCESS_KEY_ID,
    process.env.AWS_ACCESS_KEY_ID,
  );
  const secretAccessKey = firstDefined(
    process.env.RAILWAY_BUCKET_SECRET_ACCESS_KEY,
    process.env.AWS_SECRET_ACCESS_KEY,
  );
  const endpoint = firstDefined(
    process.env.RAILWAY_BUCKET_ENDPOINT,
    process.env.AWS_ENDPOINT_URL_S3,
    process.env.AWS_S3_ENDPOINT,
  );
  const bucketName = firstDefined(
    process.env.RAILWAY_BUCKET_NAME,
    process.env.BUCKET_NAME,
    process.env.AWS_BUCKET_NAME,
    process.env.S3_BUCKET,
  );
  const region = firstDefined(
    process.env.RAILWAY_BUCKET_REGION,
    process.env.AWS_REGION,
  ) || "us-east-1";

  if (!accessKeyId || !secretAccessKey || !endpoint || !bucketName) {
    cachedConfig = null;
    return cachedConfig;
  }

  cachedConfig = {
    accessKeyId,
    secretAccessKey,
    endpoint,
    bucketName,
    region,
  };
  return cachedConfig;
}

function getS3Client() {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  const config = resolveBucketConfig();
  if (!config) {
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = new S3Client({
    region: config.region,
    endpoint: config.endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });

  return cachedClient;
}

function getQrObjectKey(referralCode: string) {
  return `${QR_OBJECT_PREFIX}/${referralCode}.png`;
}

export function referralQrApiPath(referralCode: string) {
  return `/api/referrals/qr/${encodeURIComponent(referralCode)}`;
}

export async function uploadReferralQrCode(
  referralCode: string,
  imageData: Uint8Array,
) {
  const config = resolveBucketConfig();
  const client = getS3Client();
  if (!config || !client) {
    throw new Error(
      "Railway bucket environment is not fully configured. Required variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_ENDPOINT_URL_S3, BUCKET_NAME.",
    );
  }

  await client.send(
    new PutObjectCommand({
      Bucket: config.bucketName,
      Key: getQrObjectKey(referralCode),
      Body: imageData,
      ContentType: "image/png",
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );
}

type ReferralQrCodeObject = {
  contentType: string;
  data: Uint8Array;
};

export async function getReferralQrCodeObject(
  referralCode: string,
): Promise<ReferralQrCodeObject | null> {
  const config = resolveBucketConfig();
  const client = getS3Client();
  if (!config || !client) {
    return null;
  }

  try {
    const response = await client.send(
      new GetObjectCommand({
        Bucket: config.bucketName,
        Key: getQrObjectKey(referralCode),
      }),
    );

    if (!response.Body) {
      return null;
    }

    return {
      contentType: response.ContentType || "image/png",
      data: await response.Body.transformToByteArray(),
    };
  } catch (error: unknown) {
    if (isObjectNotFoundError(error)) {
      return null;
    }
    throw error;
  }
}

function isObjectNotFoundError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  const errorName =
    "name" in error && typeof error.name === "string" ? error.name : "";
  const statusCode =
    "$metadata" in error &&
    error.$metadata &&
    typeof error.$metadata === "object" &&
    "httpStatusCode" in error.$metadata &&
    typeof error.$metadata.httpStatusCode === "number"
      ? error.$metadata.httpStatusCode
      : 0;

  return (
    errorName === "NoSuchKey" ||
    errorName === "NotFound" ||
    statusCode === 404
  );
}
