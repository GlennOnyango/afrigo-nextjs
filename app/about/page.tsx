"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("about-us.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("about-us.breadcrumb.about")}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_about_hero.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("about-us.hero-section.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
            {t("about-us.hero-section.description")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">6+</p>
              <p className="text-xs sm:text-sm">
                {t("about-us.hero-section.stats.years-of-experience")}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
              <p className="text-xs sm:text-sm">
                {t("about-us.hero-section.stats.successful-launches")}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">$50M+</p>
              <p className="text-xs sm:text-sm">
                {t("about-us.hero-section.stats.trade-facilitated")}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">200+</p>
              <p className="text-xs sm:text-sm">
                {t("about-us.hero-section.stats.verified-partners")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About AfriGo & Our Founders */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
            {t("about-us.founders-section.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Founder Photo */}
            <div
              className="h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_about_intro.jpg')",
              }}
            ></div>

            {/* Company Story */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>{t("about-us.founders-section.description1")}</p>
              <p>{t("about-us.founders-section.description2")}</p>
              <p>{t("about-us.founders-section.description3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AfriGo Services */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
            {t("about-us.service-section.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services */}

            {Array.from({ length: 3 }).map((_, i) => (
              <a
                key={`service-link-${i + 1}`}
                href="/services"
                className="bg-blue-900 text-white p-6 rounded hover:bg-blue-800 transition-colors"
              >
                <div className="bg-white text-blue-900 p-3 rounded inline-block mb-4">
                  <span className="text-2xl">☰</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t(
                    `about-us.service-section.services-list.link-${i + 1}.title`,
                  )}
                </h3>
                <p className="text-sm mb-4">
                  {t(
                    `about-us.service-section.services-list.link-${i + 1}.description`,
                  )}
                </p>
                <span className="text-sm hover:underline">
                  {t(
                    `about-us.service-section.services-list.link-${i + 1}.description2`,
                  )}
                </span>
              </a>
            ))}

            {/* All Services */}
            <a
              href="/services"
              className="bg-orange-500 text-white p-6 rounded hover:bg-orange-600 transition-colors"
            >
              <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t("about-us.service-section.all-services-link.title")}
              </h3>
              <p className="text-sm mb-4">
                {t("about-us.service-section.all-services-link.description")}
              </p>
              <span className="text-sm text-blue-900 hover:underline">
                {t("about-us.service-section.all-services-link.description2")}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How AfriGo Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t(`about-us.how-it-works-section.chinese-business.title`)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chinese Businesses */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {t("about-us.how-it-works-section.chinese-business.title")}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {t(
                      "about-us.how-it-works-section.chinese-business.description",
                    )}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    •{" "}
                    {t(
                      `about-us.how-it-works-section.chinese-business.options.supply-chain`,
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      `about-us.how-it-works-section.chinese-business.options.local-partners`,
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      `about-us.how-it-works-section.chinese-business.options.compliance`,
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Partners */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {t("about-us.how-it-works-section.service-partner.title")}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {t(
                      "about-us.how-it-works-section.service-partner.description",
                    )}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    •
                    {t(
                      "about-us.how-it-works-section.service-partner.options.direct-referrals",
                    )}
                  </li>
                  <li>
                    •
                    {t(
                      "about-us.how-it-works-section.service-partner.options.competitive-models",
                    )}
                  </li>
                  <li>
                    •
                    {t(
                      "about-us.how-it-works-section.service-partner.options.support",
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Kenyan Businesses */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {t("about-us.how-it-works-section.kenyan-business.title")}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {t(
                      "about-us.how-it-works-section.kenyan-business.description",
                    )}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    •{" "}
                    {t(
                      "about-us.how-it-works-section.kenyan-business.options.supplier-access",
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "about-us.how-it-works-section.kenyan-business.options.investment-links",
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "about-us.how-it-works-section.kenyan-business.options.trade-support",
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment/Partnership CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t("about-us.investment-cta.title")}
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("about-us.investment-cta.subtitle")}
          </h2>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            {t("about-us.investment-cta.description")}
          </p>
          <a
            href="#contact-section"
            className="inline-block bg-orange-500 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded hover:bg-orange-600 transition-colors"
          >
            {t("about-us.investment-cta.action-text")}
          </a>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 text-center">
            {t("about-us.team.title")}
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            {t("about-us.team.description")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center">
                <div
                  className="h-32 sm:h-40 mb-3 bg-cover bg-center border border-gray-400 rounded"
                  style={{
                    backgroundImage: `url('/images/afrigo_team_member_${i + 1}.jpg')`,
                  }}
                ></div>
                <p className="font-bold text-xs sm:text-sm">
                  {t("about-us.team.members.name")}
                </p>
                <p className="text-xs text-gray-600">
                  {t("about-us.team.members.position")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("about-us.team.members.nationality")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("about-us.certification.title")}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Certs */}
            {Array.from({ length : 4 }).map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 rounded p-6 text-center"
              >
                <div className="bg-blue-900 h-20 sm:h-24 mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">{t(`about-us.certification.certs.cert-${index + 1}.icon`)}</span>
                </div>
                <p className="font-bold text-sm sm:text-base">
                  {t(`about-us.certification.certs.cert-${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Contact CTA */}
      <section id="contact-section" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {t("about-us.unified-contact-section.title")}
          </h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            {t("about-us.unified-contact-section.description")}
          </p>

          {/* 4 Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Call Us Now */}
            <a
              href="tel:+254XXXXXXXXX"
              className="bg-blue-900 text-white p-6 rounded-lg hover:bg-blue-800 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📞</div>
              <span className="font-bold text-base">
                  {t("about-us.unified-contact-section.contact-links.contact-us.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("about-us.unified-contact-section.contact-links.contact-us.description")}
                </span>
            </a>

            {/* Chat on WeChat */}
            <a
              href="weixin://dl/chat?wechat_id_placeholder"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">💬</div>
              <span className="font-bold text-base">
                {t("about-us.unified-contact-section.contact-links.wechat.label")}
                </span>
              <span className="text-xs opacity-80">
              {t("about-us.unified-contact-section.contact-links.wechat.description")}
                 </span>
            </a>

            {/* Chat on WhatsApp */}
            <a
              href="https://wa.me/254XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📱</div>
              <span className="font-bold text-base">
                {t("about-us.unified-contact-section.contact-links.wechat-whatsapp.label")}
                </span>
              <span className="text-xs opacity-80">
             {t("about-us.unified-contact-section.contact-links.wechat-whatsapp.description")}
                   </span>
            </a>

            {/* Schedule Consultation */}
            <a
              href="/contact"
              className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📅</div>
              <span className="font-bold text-base">
             {t("about-us.unified-contact-section.contact-links.schedule.label")}
                   </span>
              <span className="text-xs opacity-80">
            {t("about-us.unified-contact-section.contact-links.schedule.description")}
                   </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
