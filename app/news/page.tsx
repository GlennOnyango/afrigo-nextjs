"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NewsPage() {
  const { t } = useTranslation();

  const financialItems = ["1", "2", "3", "4", "5", "6"] as const;
  const businessItems = ["1", "2", "3", "4", "5", "6"] as const;
  const politicalItems = ["1", "2", "3", "4", "5", "6"] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("news.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("news.breadcrumb.news")}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: "url('/images/afrigo_news.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("news.hero.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            {t("news.hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white">
            <span>{t("news.hero.sources-label")}</span>
            <span className="text-blue-300 font-semibold">Reuters</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Bloomberg</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Nation</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Standard</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Business Daily</span>
          </div>
        </div>
      </section>

      {/* Filter by Category */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-bold mb-3">{t("news.filters.label")}</p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 rounded text-xs sm:text-sm">
              {t("news.filters.all")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {t("news.filters.financial")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {t("news.filters.business")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {t("news.filters.political")}
            </button>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
            {t("news.featured.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Large Featured */}
            <div className="bg-gray-200 rounded overflow-hidden">
              <div className="h-48 sm:h-64 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                <span className="text-gray-500">
                  {t("news.common.image-placeholder")}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded">
                    {t("news.featured.large.category")}
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                    {t("news.featured.large.source")}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  {t("news.featured.large.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("news.featured.large.date")}
                </p>
              </div>
            </div>

            {/* Two smaller featured */}
            <div className="space-y-6">
              <div className="bg-blue-900 text-white rounded overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      {t("news.featured.small-1.category")}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      {t("news.featured.small-1.source")}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {t("news.featured.small-1.title")}
                  </h3>
                  <p className="text-sm">{t("news.featured.small-1.date")}</p>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">
                      {t("news.featured.small-2.category")}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      {t("news.featured.small-2.source")}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {t("news.featured.small-2.title")}
                  </h3>
                  <p className="text-sm">{t("news.featured.small-2.date")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial News */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-green-600">
              {t("news.sections.financial.title")}
            </h2>
            <a
              href="#"
              className="text-green-600 text-sm sm:text-base font-semibold hover:underline"
            >
              {t("news.sections.financial.view-all")}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialItems.map((id) => (
              <div
                key={id}
                className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">
                    {t("news.common.image-placeholder")}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.financial.badge")}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.financial.source")}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">
                    {t(`news.sections.financial.items.${id}.title`)}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t(`news.sections.financial.items.${id}.date`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business/Commercial News */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
              {t("news.sections.business.title")}
            </h2>
            <a
              href="#"
              className="text-orange-500 text-sm sm:text-base font-semibold hover:underline"
            >
              {t("news.sections.business.view-all")}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessItems.map((id) => (
              <div
                key={id}
                className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">
                    {t("news.common.image-placeholder")}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.business.badge")}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.business.source")}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">
                    {t(`news.sections.business.items.${id}.title`)}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t(`news.sections.business.items.${id}.date`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political & Security News */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600">
              {t("news.sections.political.title")}
            </h2>
            <a
              href="#"
              className="text-red-600 text-sm sm:text-base font-semibold hover:underline"
            >
              {t("news.sections.political.view-all")}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {politicalItems.map((id) => (
              <div
                key={id}
                className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">
                    {t("news.common.image-placeholder")}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.political.badge")}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {t("news.sections.political.source")}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">
                    {t(`news.sections.political.items.${id}.title`)}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t(`news.sections.political.items.${id}.date`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
            {t("news.contact.title")}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            {t("news.contact.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-900 text-white px-10 py-3 rounded hover:bg-blue-800 transition-colors"
            >
              {t("news.contact.contact")}
            </a>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-10 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {t("news.contact.schedule")}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("news.newsletter.title")}
          </h2>
          <p className="text-white mb-6 sm:mb-8">
            {t("news.newsletter.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={t("news.newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 transition-colors whitespace-nowrap">
              {t("news.newsletter.button")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
