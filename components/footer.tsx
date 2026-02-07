"use client";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-blue-900">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-900">
                  {t("footer.ourTeam")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-900">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {t("footer.allServices")}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {t("footer.supplyChain")}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {t("footer.partnership")}
                </a>
              </li>
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {t("footer.forYou")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/partners" className="hover:text-blue-900">
                  {t("footer.becomePartner")}
                </a>
              </li>
              <li>
                <a href="/promoter" className="hover:text-blue-900">
                  {t("footer.promoterCenter")}
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-blue-900">
                  {t("footer.resources")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>info@afrigo.com</li>
              <li>+254 XXX XXX XXX</li>
              <li>{t("footer.wechat")}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-500 pt-6 border-t border-gray-300">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
