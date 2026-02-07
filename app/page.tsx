"use client";

import RegistrationPopup from "@/components/RegistrationPopup";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <RegistrationPopup />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section
          className="min-h-[80vh] py-16 sm:py-20 lg:py-24 relative bg-cover bg-center bg-gray-700 flex items-center"
          style={{
            backgroundImage: "url('/images/afrigo_home_hero.png')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t("home.hero-section.title")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-3 sm:mb-4">
              {t("home.hero-section.description")}
            </p>
            <p className="text-xs sm:text-sm text-blue-300 mb-6 sm:mb-8">
              {t("home.hero-section.description2")}{" "}
              {/* "Bridging China & Kenya for Seamless Business Success" */}
            </p>
            <a
              href="/services"
              className="inline-block bg-orange-500 text-white px-12 sm:px-16 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded hover:bg-orange-600 transition-colors"
            >
              {t("home.hero-section.service-link")}
            </a>
            <div className="mt-6 sm:mt-8 bg-gray-800 bg-opacity-70 border border-gray-600 py-2 px-4 max-w-md mx-auto text-xs sm:text-sm text-white rounded">
              ▶ {t("home.hero-section.help-business")}{" "}
            </div>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-white">
              {t("home.hero-section.quick-start.label")}{" "}
              <a
                href="/services"
                className="text-blue-300 font-semibold hover:underline"
              >
                {t("home.hero-section.quick-start.links.view-services")}{" "}
                {/* "View Services" */}
              </a>{" "}
              |
              <a
                href="/partners/directory"
                className="text-blue-300 font-semibold hover:underline ml-1"
              >
                {t("home.hero-section.quick-start.links.partner-directory")}{" "}
                {/* "Partner Directory" */}
              </a>{" "}
              |
              <a
                href="/news"
                className="text-blue-300 font-semibold hover:underline ml-1"
              >
                {t("home.hero-section.quick-start.links.latest-news")}{" "}
                {/* "Latest News" */}
              </a>
            </div>
          </div>
        </section>

        {/* About AfriGo Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
              {t("home.about-section.title")} {/* "ABOUT AFRIGO" */}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div
                className="h-64 sm:h-80 bg-cover bg-center rounded border border-gray-400"
                style={{
                  backgroundImage: "url('/images/afrigo_home_about.jpg')",
                }}
              ></div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-orange-500">
                  {t("home.about-section.subtitle1")}
                </h3>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">
                  {t("home.about-section.subtitle2")}
                </h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {t("home.about-section.description1")}{" "}
                  {/* "AfriGo Solutions is your trusted partner for seamless market entry and operations in Kenya. We specialize in bridging the gap between Chinese businesses and the Kenyan market, providing comprehensive solutions that cover every aspect of your journey." */}
                </p>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {t("home.about-section.description2")}
                </p>
                <p className="text-gray-700 text-sm mb-6 sm:mb-8 leading-relaxed">
                  {t("home.about-section.description3")}
                </p>
                <a
                  href="/about"
                  className="inline-block bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm rounded hover:bg-blue-800 transition-colors"
                >
                  {t("home.about-section.about-link")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The AfriGo Platform - 4 Boxes + Authority Badge */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {t("home.platform-section.title")}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {t("home.platform-section.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <a
                  href={t(
                    `home.platform-section.service-box-${index + 1}.link`,
                  )}
                  className="bg-white border-2 border-blue-900 p-6 rounded hover:shadow-lg transition-shadow"
                  key={index}
                >
                  <div className="text-4xl sm:text-5xl mb-4">
                    {t(`home.platform-section.service-box-${index + 1}.icons`)}
                  </div>
                  <h3 className="font-bold text-base mb-3 text-orange-500">
                    {t(`home.platform-section.service-box-${index + 1}.title`)}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    {t(
                      `home.platform-section.service-box-${index + 1}.description`,
                    )}
                  </p>
                  <p className="text-blue-600 text-xs font-semibold">
                    {t(
                      `home.platform-section.service-box-${index + 1}.description2`,
                    )}
                  </p>
                </a>
              ))}
            </div>

            {/* Authority Certified Badge - Centered */}
            <div className="flex justify-center mt-8">
              <div className="bg-green-600 text-white px-8 sm:px-12 py-3 rounded flex items-center gap-3">
                <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <span className="text-base sm:text-lg font-bold">
                  {t("home.platform-section.authority-certified")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 1x4 Desktop, 2x2 Mobile */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
              {t("home.how-it-works-section.title")}
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Steps */}

              {Array.from({ length: 4 }).map((_, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-base mb-1">
                    {t(`home.how-it-works-section.steps.step-${index + 1}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`home.how-it-works-section.steps.step-${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
              {t("home.services-section.title")}
            </h2>
            <p className="text-gray-600 text-sm mb-8 sm:mb-12">
              {t("home.services-section.description")}
            </p>

            <div className="space-y-6">
              {/* First Row - 3 tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <a
                    href="/services"
                    className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 hover:bg-blue-800 transition-colors"
                    key={index}
                  >
                    <div className="bg-white text-blue-900 p-3 rounded text-xl shrink-0">
                      ☰
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        {t(
                          `home.services-section.service-links-row-1.link-${index + 1}.title`,
                        )}
                      </h3>
                      <p className="text-sm mb-3">
                        {t(
                          `home.services-section.service-links-row-1.link-${index + 1}.description`,
                        )}
                      </p>
                      <p className="text-sm">
                        {t(
                          `home.services-section.service-links-row-1.link-${index + 1}.description2`,
                        )}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Second Row - 2 tiles centered */}
              <div className="flex flex-col md:flex-row justify-center gap-6">
                {Array.from({ length: 2 }).map((_, index) => (
                  <a
                    href="/services"
                    className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 hover:bg-blue-800 transition-colors"
                    key={index}
                  >
                    <div className="bg-white text-blue-900 p-3 rounded text-xl shrink-0">
                      ☰
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        {t(
                          `home.services-section.service-links-row-2.link-${index + 1}.title`,
                        )}
                      </h3>
                      <p className="text-sm mb-3">
                        {t(
                          `home.services-section.service-links-row-2.link-${index + 1}.description`,
                        )}
                      </p>
                      <p className="text-sm">
                        {t(
                          `home.services-section.service-links-row-2.link-${index + 1}.description2`,
                        )}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {t("home.partnership-section.title")}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {t("home.partnership-section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="bg-white border-2 border-gray-300 rounded overflow-hidden"
                  key={index}
                >
                  <div className="bg-blue-900 text-white py-3 px-4">
                    <h3 className="font-bold">
                      {t(
                        `home.partnership-section.cards.card-${index + 1}.title`,
                      )}
                    </h3>
                  </div>
                  <div className="p-6 text-left">
                    <p className="text-sm text-gray-700 mb-3">
                      {t(
                        `home.partnership-section.cards.card-${index + 1}.description`,
                      )}
                    </p>
                    <p className="text-xs text-gray-600 mb-4">
                      {t(
                        `home.partnership-section.cards.card-${index + 1}.description2`,
                      )}
                    </p>
                    <a
                      href="/partners"
                      className="text-blue-600 text-sm font-semibold block text-center hover:underline"
                    >
                      {t(
                        `home.partnership-section.cards.card-${index + 1}.link`,
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/partners"
                className="inline-block bg-blue-900 text-white px-10 py-3 text-sm rounded hover:bg-blue-800 transition-colors"
              >
                {t("home.partnership-section.dual-ctas-link.label-partner")}
              </a>
              <a
                href="/partners/directory"
                className="inline-block bg-orange-500 text-white px-10 py-3 text-sm rounded hover:bg-orange-600 transition-colors"
              >
                {t(
                  "home.partnership-section.dual-ctas-link.label-partner-directory",
                )}
              </a>
            </div>
          </div>
        </section>

        {/* Trusted by Partners */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
              {t("home.trusted-partners-section.title")}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-300 h-20 sm:h-24 flex items-center justify-center text-gray-400 text-xs"
                >
                  LOGO
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn by Referring */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {t("home.earn-by-referring-section.title")}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {t("home.earn-by-referring-section.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="bg-orange-500 text-white p-6 sm:p-8 rounded" key={index}>
                  <p className="text-2xl sm:text-3xl font-bold mb-2">
                    {t(`home.earn-by-referring-section.tiers.tier-${index + 1}.title`)}
                  </p>
                  <p className="text-sm">
                    {t(`home.earn-by-referring-section.tiers.tier-${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/promoter"
              className="inline-block bg-blue-900 text-white px-12 py-3 text-sm rounded hover:bg-blue-800 transition-colors"
            >
              {t("home.earn-by-referring-section.cta-link")}
            </a>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {t("home.success-stories-section.title")}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {t("home.success-stories-section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 border-2 border-gray-300 rounded p-6"
                >
                  <div className="bg-gray-300 h-32 flex items-center justify-center mb-4 text-4xl">
                    ▶
                  </div>
                  <p className="font-bold text-sm mb-2">
                    {t(`home.success-stories-section.stories.story-${i + 1}.title`)}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t(`home.success-stories-section.stories.story-${i + 1}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Contact CTA */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {t("home.unified-contact-section.title")}
            </h2>
            <p className="text-gray-600 mb-12 text-base sm:text-lg">
              {t("home.unified-contact-section.description")}
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
                  {t("home.unified-contact-section.contact-links.contact-us.label")}
                </span>
                <span className="text-xs opacity-80">
                  {t("home.unified-contact-section.contact-links.contact-us.description")}
                </span>
              </a>

              {/* Chat on WeChat */}
              <a
                href="weixin://dl/chat?wechat_id_placeholder"
                className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex flex-col items-center gap-3 group"
              >
                <div className="text-4xl">💬</div>
                <span className="font-bold text-base">
                  {t("home.unified-contact-section.contact-links.chat-wechat.label")}
                </span>
                <span className="text-xs opacity-80">
                  {t("home.unified-contact-section.contact-links.chat-wechat.description")}
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
                  {t("home.unified-contact-section.contact-links.chat-whatsapp.label")}
                </span>
                <span className="text-xs opacity-80">
                  {t("home.unified-contact-section.contact-links.chat-whatsapp.description")}
                </span>
              </a>

              {/* Schedule Consultation */}
              <a
                href="/contact"
                className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-3 group"
              >
                <div className="text-4xl">📅</div>
                <span className="font-bold text-base">
                  {t("home.unified-contact-section.contact-links.schedule.label")}
                </span>
                <span className="text-xs opacity-80">
                  {t("home.unified-contact-section.contact-links.schedule.description")}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* News CTA */}
        <section className="bg-blue-900 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("home.news-cta-section.title")}
            </h2>
            <p className="text-white mb-6 sm:mb-8">
              {t("home.news-cta-section.description")}
            </p>
            <a
              href="/news"
              className="inline-block bg-orange-500 text-white px-12 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {t("home.news-cta-section.cta-link")}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
