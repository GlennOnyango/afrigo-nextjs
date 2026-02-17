"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";

import {
  PARTNER_CATEGORY_KEYS,
  type PartnerCategoryFilter,
  type PartnerCategoryKey,
} from "@/lib/partners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PartnerDirectoryItem = {
  id: string;
  companyName: string;
  contactPerson: string;
  phoneOrEmail: string;
  businessCategory: string;
  yearsInOperation: number;
  location: string;
  servicesOffered: string;
  website: string | null;
  categoryKey: PartnerCategoryKey;
};

type PartnerResponse = {
  partners: PartnerDirectoryItem[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    categoryCounts: Record<PartnerCategoryFilter, number>;
  };
};

const PAGE_SIZE = 12;
const tabCategories: PartnerCategoryFilter[] = [
  "all",
  "hotels",
  "transport",
  "legal",
  "financial",
  "real-estate",
  "staffing",
  "translation",
];
const selectCategories: PartnerCategoryFilter[] = ["all", ...PARTNER_CATEGORY_KEYS];

function createEmptyCategoryCounts(): Record<PartnerCategoryFilter, number> {
  return {
    all: 0,
    hotels: 0,
    transport: 0,
    legal: 0,
    financial: 0,
    "real-estate": 0,
    staffing: 0,
    translation: 0,
    other: 0,
  };
}

function getPartnerContactHref(phoneOrEmail: string) {
  return phoneOrEmail.includes("@")
    ? `mailto:${phoneOrEmail}`
    : `tel:${phoneOrEmail}`;
}

function buildPageItems(currentPage: number, totalPages: number) {
  if (totalPages <= 1) {
    return [1];
  }

  const pages = new Set<number>([1, totalPages, currentPage]);
  if (currentPage - 1 > 1) pages.add(currentPage - 1);
  if (currentPage - 2 > 1) pages.add(currentPage - 2);
  if (currentPage + 1 < totalPages) pages.add(currentPage + 1);
  if (currentPage + 2 < totalPages) pages.add(currentPage + 2);

  const sortedPages = Array.from(pages).sort((a, b) => a - b);
  const items: Array<number | "ellipsis"> = [];

  for (let index = 0; index < sortedPages.length; index += 1) {
    const page = sortedPages[index];
    const previous = sortedPages[index - 1];

    if (index > 0 && page - previous > 1) {
      items.push("ellipsis");
    }

    items.push(page);
  }

  return items;
}

export default function PartnerDirectoryPage() {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState<PartnerCategoryFilter>("all");
  const [partners, setPartners] = useState<PartnerDirectoryItem[]>([]);
  const [selectedPartner, setSelectedPartner] =
    useState<PartnerDirectoryItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [meta, setMeta] = useState<PartnerResponse["meta"]>({
    page: 1,
    pageSize: PAGE_SIZE,
    total: 0,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false,
    categoryCounts: createEmptyCategoryCounts(),
  });

  useEffect(() => {
    let mounted = true;

    async function fetchPartners() {
      setIsLoading(true);
      setError("");

      const params = new URLSearchParams({
        page: String(meta.page),
        pageSize: String(PAGE_SIZE),
        q: searchQuery,
        category: categoryFilter,
      });

      try {
        const response = await fetch(`/api/partners?${params.toString()}`);
        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data: PartnerResponse = await response.json();
        if (!mounted) {
          return;
        }

        setPartners(data.partners ?? []);
        setMeta(data.meta);
      } catch {
        if (!mounted) {
          return;
        }

        setPartners([]);
        setError("Failed to load partners.");
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    fetchPartners();

    return () => {
      mounted = false;
    };
  }, [categoryFilter, meta.page, searchQuery]);

  const paginationItems = useMemo(
    () => buildPageItems(meta.page, meta.totalPages),
    [meta.page, meta.totalPages],
  );

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchQuery(searchInput.trim());
    setMeta((previous) => ({ ...previous, page: 1 }));
  }

  function setCategory(category: PartnerCategoryFilter) {
    setCategoryFilter(category);
    setMeta((previous) => ({ ...previous, page: 1 }));
  }

  function handlePageChange(page: number) {
    if (page < 1 || page > meta.totalPages || page === meta.page) {
      return;
    }

    setMeta((previous) => ({ ...previous, page }));
  }

  const start = meta.total === 0 ? 0 : (meta.page - 1) * meta.pageSize + 1;
  const end = Math.min(meta.page * meta.pageSize, meta.total);
  const showHotelContact = selectedPartner?.categoryKey === "hotels";

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("resource-partners.directory-page.breadcrumb.home")}
            </Link>{" "}
            &gt;{" "}
            <Link href="/partners" className="hover:text-blue-900">
              {t(
                "resource-partners.directory-page.breadcrumb.resource-partners",
              )}
            </Link>{" "}
            &gt;{" "}
            {t("resource-partners.directory-page.breadcrumb.partner-directory")}
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_partners_directory.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("resource-partners.directory-page.hero.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
            {t("resource-partners.directory-page.hero.description")}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder={t(
                "resource-partners.directory-page.hero.search.placeholder",
              )}
              className="flex-1 bg-white border-2 border-white rounded px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            <select
              value={categoryFilter}
              onChange={(event) =>
                setCategory(event.target.value as PartnerCategoryFilter)
              }
              className="border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900"
            >
              {selectCategories.map((category) => (
                <option key={category} value={category}>
                  {category === "all"
                    ? t(
                        "resource-partners.directory-page.hero.search.all-categories",
                      )
                    : t(`resource-partners.categories.items.${category}.title`)}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 whitespace-nowrap"
            >
              {t("resource-partners.directory-page.hero.search.button")}
            </button>
          </form>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 sm:gap-6 py-4 overflow-x-auto">
            {tabCategories.map((category) => {
              const active = categoryFilter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategory(category)}
                  className={`${
                    active
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } px-4 sm:px-6 py-2 rounded whitespace-nowrap text-sm sm:text-base`}
                >
                  {(category === "all"
                    ? t("resource-partners.directory-page.tabs.all")
                    : t(`resource-partners.directory-page.tabs.${category}`)) +
                    ` (${meta.categoryCounts[category] ?? 0})`}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing {start}-{end} of {meta.total} partners
            </p>
          </div>

          {isLoading && <p className="text-gray-600 mb-8">Loading partners...</p>}
          {!!error && <p className="text-red-600 mb-8">{error}</p>}
          {!isLoading && !error && partners.length === 0 && (
            <p className="text-gray-600 mb-8">No partners found.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gray-50 border-2 border-gray-300 rounded p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2">{partner.companyName}</h3>

                <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded inline-block mb-3">
                  {t(
                    `resource-partners.categories.items.${partner.categoryKey}.title`,
                  )}
                </div>

                <p className="text-sm text-gray-700 mb-2">{partner.contactPerson}</p>
                <p className="text-sm text-gray-600 mb-2">📍 {partner.location}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {partner.yearsInOperation} years in operation
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-blue-900 text-white text-sm py-2 rounded text-center hover:bg-blue-800"
                    onClick={() => setSelectedPartner(partner)}
                  >
                    {t(
                      "resource-partners.directory-page.partner-card.buttons.view-profile",
                    )}
                  </button>
                  <a
                    href={getPartnerContactHref(partner.phoneOrEmail)}
                    className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700 text-center"
                  >
                    {t(
                      "resource-partners.directory-page.partner-card.buttons.contact",
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <Dialog
            open={selectedPartner !== null}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedPartner(null);
              }
            }}
          >
            <DialogContent className="max-h-[85vh] overflow-y-auto">
              {selectedPartner ? (
                <>
                  <DialogHeader>
                    <DialogTitle>{selectedPartner.companyName}</DialogTitle>
                    <DialogDescription>
                      {t(
                        `resource-partners.categories.items.${selectedPartner.categoryKey}.title`,
                      )}{" "}
                      | {selectedPartner.location}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-5">
                    <section className="rounded-lg border border-gray-200 p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        {t("resource-partners.directory-page.profile-dialog.description")}
                      </h4>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {selectedPartner.servicesOffered ||
                          t("resource-partners.directory-page.profile-dialog.no-description")}
                      </p>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border border-gray-200 p-3">
                        <p className="text-xs text-gray-500">
                          {t(
                            "resource-partners.directory-page.profile-dialog.business-category",
                          )}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedPartner.businessCategory}
                        </p>
                      </div>
                      <div className="rounded-lg border border-gray-200 p-3">
                        <p className="text-xs text-gray-500">
                          {t(
                            "resource-partners.directory-page.profile-dialog.years-in-operation",
                          )}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedPartner.yearsInOperation}
                        </p>
                      </div>
                      <div className="rounded-lg border border-gray-200 p-3 sm:col-span-2">
                        <p className="text-xs text-gray-500">
                          {t("resource-partners.directory-page.profile-dialog.location")}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedPartner.location}
                        </p>
                      </div>
                    </section>

                    {showHotelContact && (
                      <section className="rounded-lg border border-gray-200 p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          {t(
                            "resource-partners.directory-page.profile-dialog.contact-information",
                          )}
                        </h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p>
                            <span className="font-medium text-gray-900">
                              {t(
                                "resource-partners.directory-page.profile-dialog.contact-person",
                              )}
                              :
                            </span>{" "}
                            {selectedPartner.contactPerson}
                          </p>
                          <p>
                            <span className="font-medium text-gray-900">
                              {t(
                                "resource-partners.directory-page.profile-dialog.phone-or-email",
                              )}
                              :
                            </span>{" "}
                            {selectedPartner.phoneOrEmail}
                          </p>
                        </div>
                      </section>
                    )}

                    {selectedPartner.website && (
                      <a
                        href={selectedPartner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-900 hover:underline"
                      >
                        {t("resource-partners.directory-page.profile-dialog.visit-website")}
                      </a>
                    )}
                  </div>

                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <button
                        type="button"
                        className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300"
                      >
                        {t("resource-partners.directory-page.profile-dialog.close")}
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </>
              ) : null}
            </DialogContent>
          </Dialog>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <button
              type="button"
              disabled={!meta.hasPreviousPage}
              onClick={() => handlePageChange(meta.page - 1)}
              className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("resource-partners.directory-page.pagination.previous")}
            </button>

            {paginationItems.map((item, index) =>
              item === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-2 sm:px-4 py-2 text-sm sm:text-base">
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => handlePageChange(item)}
                  className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${
                    item === meta.page
                      ? "bg-blue-900 text-white"
                      : "border-2 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            <button
              type="button"
              disabled={!meta.hasNextPage}
              onClick={() => handlePageChange(meta.page + 1)}
              className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("resource-partners.directory-page.pagination.next")}
            </button>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("resource-partners.directory-page.cta.title")}
          </h2>
          <p className="text-white mb-6 sm:mb-8">
            {t("resource-partners.directory-page.cta.description")}
          </p>
          <a
            href="/partners#application-form"
            className="inline-block bg-orange-500 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-orange-600 transition-colors"
          >
            {t("resource-partners.directory-page.cta.button")}
          </a>
        </div>
      </section>

      {/* Unified Contact CTA (reuse from resource-partners.contact) */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {t("resource-partners.contact.title")}
          </h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            {t("resource-partners.contact.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:+254XXXXXXXXX"
              className="bg-blue-900 text-white p-6 rounded-lg hover:bg-blue-800 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📞</div>
              <span className="font-bold text-base">
                {t("resource-partners.contact.cards.call.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("resource-partners.contact.cards.call.description")}
              </span>
            </a>

            <a
              href="weixin://dl/chat?wechat_id_placeholder"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">💬</div>
              <span className="font-bold text-base">
                {t("resource-partners.contact.cards.wechat.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("resource-partners.contact.cards.wechat.description")}
              </span>
            </a>

            <a
              href="https://wa.me/254XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📱</div>
              <span className="font-bold text-base">
                {t("resource-partners.contact.cards.whatsapp.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("resource-partners.contact.cards.whatsapp.description")}
              </span>
            </a>

            <a
              href="/contact"
              className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📅</div>
              <span className="font-bold text-base">
                {t("resource-partners.contact.cards.schedule.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("resource-partners.contact.cards.schedule.description")}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
