"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useTranslation } from "react-i18next";

export default function RegistrationPopup() {
  const { i18n,t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const currentLanguage = i18n.language === "cn" ? "cn" : "en";
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Pop-up Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-4 border-blue-900 relative z-10">
        {/* Language Toggle Button - Top Center */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
              {t("language")}: {currentLanguage.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
                {t("english")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage("cn")}>
                {t("chinese")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-gray-100 text-gray-600 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 text-xl font-bold z-20"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-8 pt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            {t("registrationPopup.title")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("registrationPopup.description")}
          </p>
          <div className="flex justify-center gap-4 text-sm text-green-600">
            <span>✓ {t("registrationPopup.information.info-1")}</span>
            <span>
              ✓ {t("registrationPopup.information.info-2")}
            </span>
            <span>
              ✓ {t("registrationPopup.information.info-3")}
            </span>
          </div>
        </div>

        {/* Form */}
        <form className="px-8 pb-8 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {t("registrationPopup.form.fullName.label")}{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={t("registrationPopup.form.fullName.placeholder")}
            />
          </div>

          {/* WeChat ID */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {t("registrationPopup.form.wechat.label")}{" "}
              <span className="text-red-600">*</span> (
              {t("registrationPopup.form.wechat.description")})
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={t("registrationPopup.form.wechat.placeholder")}
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {t("registrationPopup.form.email.label")}{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={t("registrationPopup.form.email.placeholder")}
            />
          </div>

          {/* I am a... Dropdown */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {t("registrationPopup.form.dropdown.label")}{" "}
              <span className="text-red-600">*</span>
            </label>
            <select className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white">
              <option value="">
                {t("registrationPopup.form.dropdown.options.option1")}
              </option>
              <option value="chinese-business">
                {t("registrationPopup.form.dropdown.options.option2")}
              </option>
              <option value="kenyan-business">
                {t("registrationPopup.form.dropdown.options.option3")}
              </option>
              <option value="service-partner">
                {t("registrationPopup.form.dropdown.options.option4")}
              </option>
              <option value="other">
                {t("registrationPopup.form.dropdown.options.option5")}
              </option>
            </select>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {t("registrationPopup.form.additionalInfo.label")}
            </label>
            <textarea
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 h-24 resize-none"
              placeholder={t("registrationPopup.form.additionalInfo.placeholder")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded text-lg font-bold hover:bg-orange-600 transition-colors"
          >
            {t("registrationPopup.registerButton")}
          </button>

          {/* Skip Link */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500 text-sm font-normal"
            >
              {t("registrationPopup.skip")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
