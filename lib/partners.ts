export const PARTNER_CATEGORY_KEYS = [
  "hotels",
  "transport",
  "legal",
  "financial",
  "real-estate",
  "staffing",
  "translation",
  "other",
] as const;

export type PartnerCategoryKey = (typeof PARTNER_CATEGORY_KEYS)[number];
export type PartnerCategoryFilter = "all" | PartnerCategoryKey;

const categoryMatchers: Record<PartnerCategoryKey, RegExp> = {
  hotels: /(hotel|hospitality|lodging|accommodation|guest house|resort|酒店|住宿|旅馆)/i,
  transport:
    /(transport|logistics|cargo|shipping|delivery|fleet|transportation|运输|物流|货运)/i,
  legal: /(legal|law|lawyer|attorney|advocate|compliance|notary|法律|律师|法务)/i,
  financial:
    /(finance|financial|bank|banking|accounting|tax|insurance|audit|investment|金融|银行|财务)/i,
  "real-estate":
    /(real estate|property|housing|office space|broker|realtor|地产|房产|物业)/i,
  staffing:
    /(staffing|recruit|recruitment|hr|human resources|talent|outsourcing|人力|招聘)/i,
  translation:
    /(translation|translator|interpret|interpreter|language services|翻译|口译|笔译)/i,
  other: /.*/i,
};

export function normalizePartnerCategory(
  businessCategory: string | null | undefined,
): PartnerCategoryKey {
  if (!businessCategory) {
    return "other";
  }

  for (const key of PARTNER_CATEGORY_KEYS) {
    if (key === "other") {
      continue;
    }
    if (categoryMatchers[key].test(businessCategory)) {
      return key;
    }
  }

  return "other";
}
