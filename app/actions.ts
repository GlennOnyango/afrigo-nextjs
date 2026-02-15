"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { EntityType } from "@prisma/client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createHmac, randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export async function registerPost(formData: FormData) {
  const fullName = formData.get("fullname") as string | null;
  const wechatId = formData.get("wechatId") as string | null;
  const email = formData.get("email") as string | null;
  const userType = formData.get("userType") as string | null;
  const additionalType = formData.get("additionalInfo") as string | null;

  if (!fullName || !wechatId || !email || !userType) {
    return { success: false, message: "Missing required fields." };
  }

  let entityType: EntityType;
  try {
    entityType = EntityType[userType as keyof typeof EntityType];
    if (!entityType) {
      return { success: false, message: "Invalid entity type." };
    }
  } catch {
    return { success: false, message: "Invalid entity type." };
  }

  try {
    const entity = await prisma.entity.create({
      data: {
        fullName,
        weChatId: wechatId,
        emailAddress: email,
        entityType,
        additionalRequirements: additionalType || undefined,
      },
    });
    return { success: true, message: "Registration successful!", entity };
  } catch (error: unknown) {
    let message = "Registration failed.";
    // Prisma unique constraint violation error code is 'P2002'
    if (isErrorWithMessage(error)) {
      message =
        "An error occured while registering, please try using another email address. Contact us if you are unable to resolve the issue.";
    }
    return { success: false, message };
  }
}

export async function registerPartner(formData: FormData) {
  const companyName = formData.get("companyName") as string | null;
  const contactPerson = formData.get("contactPerson") as string | null;
  const position = formData.get("position") as string | null;
  const phoneOrEmail = formData.get("phoneOrEmail") as string | null;
  const businessCategory = formData.get("businessCategory") as string | null;
  const yearsInOperation = formData.get("yearsInOperation") as string | null;
  const location = formData.get("location") as string | null;
  const businessRegistrationNumber = formData.get(
    "businessRegistrationNumber",
  ) as string | null;
  const website = formData.get("website") as string | null;
  const servicesOffered = formData.get("servicesOffered") as string | null;
  const reason = formData.get("reason") as string | null;

  if (
    !companyName ||
    !contactPerson ||
    !position ||
    !phoneOrEmail ||
    !businessCategory ||
    !yearsInOperation ||
    !location ||
    !businessRegistrationNumber ||
    !servicesOffered ||
    !reason
  ) {
    return { success: false, message: "Missing required fields." };
  }

  let years: number;
  try {
    years = parseInt(yearsInOperation, 10);
    if (isNaN(years)) {
      return { success: false, message: "Invalid years in operation." };
    }
  } catch {
    return { success: false, message: "Invalid years in operation." };
  }

  try {
    const partner = await prisma.partner.create({
      data: {
        companyName,
        contactPerson,
        position,
        phoneOrEmail,
        businessCategory,
        yearsInOperation: years,
        location,
        businessRegistrationNumber,
        website: website || undefined,
        servicesOffered,
        reason,
      },
    });
    return {
      success: true,
      message: "Partner application successful!",
      partner,
    };
  } catch (error: unknown) {
    let message = "Partner application failed.";
    if (isErrorWithMessage(error)) {
      message =
        "An error occurred while submitting the application. Please try using another phone or email. Contact us if you are unable to resolve the issue.";
    }
    return { success: false, message };
  }
}

export async function registerPromoter(formData: FormData) {
  const fullName = formData.get("fullName") as string | null;
  const email = formData.get("email") as string | null;
  const phoneNumber = formData.get("phoneNumber") as string | null;
  const weChatId = formData.get("weChatId") as string | null;
  const promotePlan = formData.get("promotePlan") as string | null;

  if (!fullName || !email || !phoneNumber || !promotePlan) {
    return { success: false, message: "Missing required fields." };
  }

  try {
    const referralCode = await generateUniqueReferralCode();

    const siteUrl =
      normalizeConfiguredBaseUrl(
        process.env.NEXT_PUBLIC_SITE_URL,
      ) || "http://localhost:3000";
    const referralLink = new URL(`/r/${referralCode}`, `${siteUrl}/`).toString();
    let qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(referralLink)}`;

    try {
      qrImageUrl = await generateAndSaveQrCode(referralCode, referralLink);
    } catch (qrError) {
      console.error("Failed to save local QR image, using remote QR URL.", qrError);
    }

    const promoter = await prisma.promoter.create({
      data: {
        fullName,
        email,
        phoneNumber,
        weChatId: weChatId || undefined,
        promotePlan,
        referralCode,
        referralLink,
        qrImageUrl,
      },
    });

    const qrImageAbsoluteUrl = qrImageUrl.startsWith("http")
      ? qrImageUrl
      : new URL(qrImageUrl, `${siteUrl}/`).toString();

    const recipients = [email, process.env.EMAIL_TO].filter(
      (recipient): recipient is string => Boolean(recipient),
    );

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: recipients,
      subject: "Your AfriGo referral link and QR code",
      html:
        `<p>Hi ${fullName},</p>` +
        "<p>Your promoter referral assets are ready.</p>" +
        `<p><strong>Referral link:</strong> <a href=\"${referralLink}\">${referralLink}</a></p>` +
        `<p><strong>QR code:</strong><br /><img src=\"${qrImageAbsoluteUrl}\" alt=\"Referral QR\" width=\"220\" height=\"220\" /></p>`,
      text:
        `Hi ${fullName},\n\n` +
        "Your promoter referral assets are ready.\n" +
        `Referral link: ${referralLink}\n` +
        `QR code: ${qrImageAbsoluteUrl}\n\n` +
        "Each valid click/scan will be tracked to your account.\n",
    });

    return {
      success: true,
      message: "Promoter registration successful!",
      promoter,
    };
  } catch (error: unknown) {
    console.error("Error registering promoter:", error);
    let message = "Promoter registration failed.";
    if (isErrorWithMessage(error)) {
      message =
        "An error occurred while registering. Please try using another email address. Contact us if you are unable to resolve the issue.";
    }
    return { success: false, message };
  }
}

async function generateUniqueReferralCode() {
  const secret = process.env.REFERRAL_HASH_SECRET || "afri-go-referral";

  for (let i = 0; i < 5; i += 1) {
    const candidate = createHmac("sha256", secret)
      .update(`${randomUUID()}:${Date.now()}:${Math.random()}`)
      .digest("hex")
      .slice(0, 24);

    const existing = await prisma.promoter.findUnique({
      where: { referralCode: candidate },
      select: { id: true },
    });

    if (!existing) {
      return candidate;
    }
  }

  throw new Error("Failed to generate a unique referral code");
}

function normalizeConfiguredBaseUrl(rawUrl?: string) {
  if (!rawUrl) {
    return null;
  }

  const cleaned = rawUrl.trim().replace(/^['"]|['"]$/g, "");
  if (!cleaned) {
    return null;
  }

  const withProtocol = /^https?:\/\//i.test(cleaned)
    ? cleaned
    : cleaned.startsWith("localhost") || cleaned.startsWith("127.0.0.1")
      ? `http://${cleaned}`
      : `https://${cleaned}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

async function generateAndSaveQrCode(referralCode: string, referralLink: string) {
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(referralLink)}`;
  const response = await fetch(qrApiUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`QR API request failed with status ${response.status}`);
  }

  const qrBuffer = Buffer.from(await response.arrayBuffer());
  const qrDir = path.join(process.cwd(), "public", "referrals");
  await mkdir(qrDir, { recursive: true });

  const fileName = `${referralCode}.png`;
  const filePath = path.join(qrDir, fileName);
  await writeFile(filePath, qrBuffer);

  return `/referrals/${fileName}`;
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Accepts an object with contact form fields and sends an email with the details
export async function testEmail(form: {
  fullName: string;
  email: string;
  phone?: string;
  wechat?: string;
  subject: string;
  message: string;
}) {
  const { fullName, email, phone, wechat, subject, message } = form;
  const emailBody = `
    New contact form submission:

    Name: ${fullName}
    Email: ${email}
    Phone: ${phone || "-"}
    WeChat: ${wechat || "-"}
    Subject: ${subject}
    Message: ${message}
  `;
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: [process.env.EMAIL_TO || "your_email@gmail.com"],
    subject: `Contact Form: ${subject}`,
    text: emailBody,
  });
  if (error) {
    console.error(error);
    return { ok: false };
  }
  return { ok: true, id: data?.id };
}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  );
}

export async function createSolutions(formData: FormData) {
  const consultingOptions = [
    "supply-chain",
    "service-partnerships",
    "resource-solutions",
    "custom-solutions",
  ];
  const investorOptions = [
    "market-entry",
    "regulatory-compliance",
    "local-partners",
    "operations-setup",
  ];

  function parseArray(key: string): string[] {
    const val = formData.getAll(key);
    if (
      val.length === 1 &&
      typeof val[0] === "string" &&
      val[0].includes(",")
    ) {
      return val[0]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return val.map((v) => v.toString());
  }

  function formatServices(
    selected: string[],
    allOptions: string[],
    packageKey: string,
    allLabel: string,
  ): string {
    if (selected.includes(packageKey)) {
      const allSelected = allOptions.every((opt) => selected.includes(opt));
      if (allSelected) {
        return allLabel;
      }
      return selected.filter((s) => allOptions.includes(s)).join(", ");
    }
    return selected.filter((s) => allOptions.includes(s)).join(", ");
  }

  const consultingServicesArr = parseArray("consultingServices");
  const investorServicesArr = parseArray("investorServices");
  const fullName = formData.get("fullName") as string | null;
  const wechatId = formData.get("wechatId") as string | null;
  const emailAddress = formData.get("emailAddress") as string | null;
  const companyName = formData.get("companyName") as string | null;
  const industry = formData.get("industry") as string | null;
  const budgetRange = formData.get("budgetRange") as string | null;
  const timeLine = formData.get("timeLine") as string | null;
  const details = formData.get("details") as string | null;

  if (!fullName || !wechatId || !emailAddress) {
    return { success: false, message: "Missing required fields." };
  }

  const consultingServices = formatServices(
    consultingServicesArr,
    consultingOptions,
    "complete-package",
    "All consulting services",
  );
  const investorService = formatServices(
    investorServicesArr,
    investorOptions,
    "investor-package",
    "All investor services",
  );

  try {
    const solution = await prisma.soultions.create({
      data: {
        consultingServices,
        investorService,
        fullName,
        wechatId,
        emailAddress,
        companyName: companyName || "",
        industry: industry || "",
        budgetRange: budgetRange || "",
        timeLine: timeLine || "",
        details: details || "",
      },
    });

    // Send email notification about the solution request
    const emailBody =
      `New solution request submitted by ${fullName} (${emailAddress}):\n\n` +
      `Consulting Services: ${consultingServices}\n` +
      `Investor Services: ${investorService}\n` +
      `Company Name: ${companyName || "-"}\n` +
      `Industry: ${industry || "-"}\n` +
      `Budget Range: ${budgetRange || "-"}\n` +
      `Time Line: ${timeLine || "-"}\n` +
      `WeChat ID: ${wechatId || "-"}\n` +
      `Details: ${details || "-"}`;

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [process.env.EMAIL_TO || "your_email@gmail.com"],
      subject: `New Solution Request from ${fullName}`,
      text: emailBody,
    });

    return {
      success: true,
      message: "Solution submitted successfully!",
      solution,
    };
  } catch (error: unknown) {
    let message = "Solution submission failed.";
    if (isErrorWithMessage(error)) {
      message = "An error occurred while submitting the solution.";
    }
    return { success: false, message };
  }
}
export async function signUp({
  email,
  password,
  name,
  image,
}: {
  email: string;
  password: string;
  name?: string;
  image?: string;
}) {
  try {
    if (!password || typeof password !== "string" || password.trim() === "") {
      return { success: false, error: "Password is required." };
    }
    // name is required by the API, so default to empty string if not provided
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password: password,
        name: name ?? "",
        ...(image ? { image } : {}),
      },
    });
    if (result && result.user) {
      return { success: true };
    }
    return { success: false, error: "Sign up failed" };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign up failed",
    };
  }
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const result = await auth.api.signInEmail({
      body: { email, password },
      headers: await headers(),
    });
    if (result && result.user) {
      // Return user object and admin status
      return {
        success: true,
        user: result.user,
        isAdmin: result.user.role === "admin",
      };
    }
    return { success: false, error: "Sign in failed" };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign in failed",
    };
  }
}

export async function logout() {
  await auth.api.signOut({
    headers: await headers(),
  });
  return { success: true };
}
