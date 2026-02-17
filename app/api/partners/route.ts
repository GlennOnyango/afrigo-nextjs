import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import {
  PARTNER_CATEGORY_KEYS,
  type PartnerCategoryKey,
  type PartnerCategoryFilter,
  normalizePartnerCategory,
} from "@/lib/partners";

export const dynamic = "force-dynamic";

function parsePositiveInt(value: string | null, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    return fallback;
  }
  return parsed;
}

function parseCategory(value: string | null): PartnerCategoryFilter {
  if (!value || value === "all") {
    return "all";
  }

  if (
    PARTNER_CATEGORY_KEYS.includes(
      value as (typeof PARTNER_CATEGORY_KEYS)[number],
    )
  ) {
    return value as PartnerCategoryFilter;
  }

  return "all";
}

function buildCategoryCounts(
  partners: Array<{ categoryKey: PartnerCategoryKey }>,
) {
  const counts: Record<PartnerCategoryFilter, number> = {
    all: partners.length,
    hotels: 0,
    transport: 0,
    legal: 0,
    financial: 0,
    "real-estate": 0,
    staffing: 0,
    translation: 0,
    other: 0,
  };

  for (const partner of partners) {
    counts[partner.categoryKey] += 1;
  }

  return counts;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parsePositiveInt(searchParams.get("page"), 1);
  const pageSize = parsePositiveInt(searchParams.get("pageSize"), 12);
  const limit = parsePositiveInt(searchParams.get("limit"), 0);
  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const category = parseCategory(searchParams.get("category"));

  try {
    const partners = await prisma.partner.findMany({
      where: { cleared: true },
      select: {
        id: true,
        companyName: true,
        contactPerson: true,
        phoneOrEmail: true,
        businessCategory: true,
        yearsInOperation: true,
        location: true,
        servicesOffered: true,
        website: true,
      },
      orderBy: { companyName: "asc" },
    });

    console.log(`Fetched ${partners.length} partners from database`);

    const normalizedPartners = partners.map((partner) => ({
      ...partner,
      categoryKey: normalizePartnerCategory(partner.businessCategory),
    }));

    const queryMatchedPartners = normalizedPartners.filter((partner) => {
      const searchable = [
        partner.companyName,
        partner.contactPerson,
        partner.location,
        partner.businessCategory,
        partner.servicesOffered,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = query ? searchable.includes(query) : true;

      return matchesQuery;
    });

    const categoryCounts = buildCategoryCounts(queryMatchedPartners);
    const filteredPartners =
      category === "all"
        ? queryMatchedPartners
        : queryMatchedPartners.filter((partner) => partner.categoryKey === category);
    const total = filteredPartners.length;

    if (limit > 0) {
      return NextResponse.json({
        partners: filteredPartners.slice(0, limit),
        meta: {
          page: 1,
          pageSize: limit,
          total,
          totalPages: total > 0 ? 1 : 0,
          hasPreviousPage: false,
          hasNextPage: false,
          categoryCounts,
        },
      });
    }

    const totalPages = total > 0 ? Math.ceil(total / pageSize) : 1;
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * pageSize;
    const end = start + pageSize;

    return NextResponse.json({
      partners: filteredPartners.slice(start, end),
      meta: {
        page: safePage,
        pageSize,
        total,
        totalPages,
        hasPreviousPage: safePage > 1,
        hasNextPage: safePage < totalPages,
        categoryCounts,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch partners" },
      { status: 500 },
    );
  }
}
