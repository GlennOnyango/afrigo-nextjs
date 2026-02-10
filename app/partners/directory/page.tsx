"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

// If Footer expects language prop, update Footer to use i18n language internally,
// or pass i18n.language instead.
export default function PartnerDirectoryPage() {
  const { t } = useTranslation();

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

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder={t(
                "resource-partners.directory-page.hero.search.placeholder",
              )}
              className="flex-1 bg-white border-2 border-white rounded px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            <select className="border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
              <option>
                {t(
                  "resource-partners.directory-page.hero.search.all-categories",
                )}
              </option>

              {/* Reuse existing category titles from resource-partners.categories */}
              <option>
                {t("resource-partners.categories.items.hotels.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.transport.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.legal.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.financial.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.real-estate.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.staffing.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.translation.title")}
              </option>
              <option>
                {t("resource-partners.categories.items.other.title")}
              </option>
            </select>
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 whitespace-nowrap">
              {t("resource-partners.directory-page.hero.search.button")}
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 sm:gap-6 py-4 overflow-x-auto">
            <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 rounded whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.all")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.hotels")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.transport")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.legal")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.financial")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.real-estate")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.staffing")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {t("resource-partners.directory-page.tabs.translation")}
            </button>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              {t("resource-partners.directory-page.results.showing")}
            </p>
            <select className="border-2 border-gray-300 rounded px-4 py-2 bg-white text-sm sm:text-base">
              <option>
                {t(
                  "resource-partners.directory-page.results.sort.highest-rated",
                )}
              </option>
              <option>
                {t(
                  "resource-partners.directory-page.results.sort.most-reviews",
                )}
              </option>
              <option>
                {t("resource-partners.directory-page.results.sort.newest")}
              </option>
              <option>
                {t("resource-partners.directory-page.results.sort.az")}
              </option>
            </select>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Nairobi Grand Hotel",
                categoryKey: "hotels",
                rating: 4.9,
                reviews: 45,
                location: "Westlands, Nairobi",
              },
              {
                name: "Swift Transport KE",
                categoryKey: "transport",
                rating: 4.8,
                reviews: 38,
                location: "Nairobi CBD",
              },
              {
                name: "Legal Partners Ltd",
                categoryKey: "legal",
                rating: 4.7,
                reviews: 29,
                location: "Upper Hill",
              },
              {
                name: "Kenya Finance Co.",
                categoryKey: "financial",
                rating: 5.0,
                reviews: 52,
                location: "Westlands",
              },
              {
                name: "Prime Properties",
                categoryKey: "real-estate",
                rating: 4.6,
                reviews: 41,
                location: "Karen",
              },
              {
                name: "Talent Solutions",
                categoryKey: "staffing",
                rating: 4.8,
                reviews: 33,
                location: "Parklands",
              },
              {
                name: "LingoBridge",
                categoryKey: "translation",
                rating: 5.0,
                reviews: 27,
                location: "Kilimani",
              },
              {
                name: "Executive Suites",
                categoryKey: "hotels",
                rating: 4.9,
                reviews: 36,
                location: "Upperhill",
              },
              {
                name: "Cargo Masters",
                categoryKey: "transport",
                rating: 4.7,
                reviews: 44,
                location: "Industrial Area",
              },
              {
                name: "Smith & Associates",
                categoryKey: "legal",
                rating: 4.8,
                reviews: 31,
                location: "CBD",
              },
              {
                name: "SafeBank Advisory",
                categoryKey: "financial",
                rating: 4.9,
                reviews: 28,
                location: "Westlands",
              },
              {
                name: "Urban Spaces",
                categoryKey: "real-estate",
                rating: 4.6,
                reviews: 39,
                location: "Lavington",
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="bg-gray-50 border-2 border-gray-300 rounded p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-24 mb-4 flex items-center justify-center border border-gray-400">
                  <span className="text-gray-500 text-sm">LOGO</span>
                </div>

                <h3 className="font-bold text-lg mb-2">{partner.name}</h3>

                <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded inline-block mb-3">
                  {t(
                    `resource-partners.categories.items.${partner.categoryKey}.title`,
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="text-orange-500">
                    {"⭐".repeat(Math.floor(partner.rating))}
                  </div>
                  <span className="text-sm font-bold">{partner.rating}</span>
                  <span className="text-sm text-gray-600">
                    ({partner.reviews}{" "}
                    {t("resource-partners.directory-page.partner-card.reviews")}
                    )
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  📍 {partner.location}
                </p>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-900 text-white text-sm py-2 rounded hover:bg-blue-800">
                    {t(
                      "resource-partners.directory-page.partner-card.buttons.view-profile",
                    )}
                  </button>
                  <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700">
                    {t(
                      "resource-partners.directory-page.partner-card.buttons.contact",
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              {t("resource-partners.directory-page.pagination.previous")}
            </button>
            <button className="px-3 sm:px-4 py-2 bg-blue-900 text-white rounded text-sm sm:text-base">
              1
            </button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              2
            </button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              3
            </button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              4
            </button>
            <span className="px-2 sm:px-4 py-2 text-sm sm:text-base">...</span>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              17
            </button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
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
