import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const normalizedBaseUrl = normalizeConfiguredBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
);

export type Promoter = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  weChatId?: string;
  promotePlan: string;
  cleared: boolean;
  referrals: number;
  referralLink?: string;
  qrImageUrl?: string | null;
};

export function getPromoterColumns(toggleCleared: (id: string, cleared: boolean) => React.ReactNode): ColumnDef<Promoter>[] {
  return [
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "weChatId",
      header: "WeChat ID",
      cell: info => info.getValue() || "-",
    },
    {
      accessorKey: "promotePlan",
      header: "Promote Plan",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "cleared",
      header: "Cleared",
      cell: info => (info.row.original.cleared ? "Yes" : "No"),
    },
    {
      accessorKey: "referrals",
      header: "Referrals",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "referralLink",
      header: "Referral Link",
      cell: info => {
        const value = info.getValue() as string | undefined;
        const linkUrl = resolveUrl(value);
        return value ? (
          <a href={linkUrl} target="_blank" rel="noreferrer" className="text-blue-700 underline break-all">
            {linkUrl}
          </a>
        ) : "-";
      },
    },
    {
      accessorKey: "qrImageUrl",
      header: "QR",
      cell: info => {
        const value = info.getValue() as string | null | undefined;
        if (value == null || value.trim() === "") {
          return "-";
        }

        const qrUrl = resolveUrl(value);

        return qrUrl ? (
          <div className="flex flex-col gap-1">
            <a href={qrUrl} target="_blank" rel="noreferrer" className="inline-block">
              <Image
                src={value}
                alt="Promoter referral QR"
                width={64}
                height={64}
                className="h-16 w-16 rounded border object-contain"
              />
            </a>
            <p>{qrUrl}</p>
            <a href={qrUrl} target="_blank" rel="noreferrer" className="text-blue-700 underline">
              Open
            </a>
          </div>
        ) : "-";
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: info => toggleCleared(info.row.original.id, info.row.original.cleared),
    },
  ];
}

function resolveUrl(rawValue?: string) {
  if (!rawValue) {
    return "";
  }

  if (/^https?:\/\//i.test(rawValue)) {
    return rawValue;
  }

  if (normalizedBaseUrl) {
    return new URL(rawValue, `${normalizedBaseUrl}/`).toString();
  }

  return rawValue;
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
