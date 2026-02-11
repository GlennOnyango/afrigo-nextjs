"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import { testEmail } from "../actions";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("full-name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const wechat = formData.get("wechat") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    try {
      const result = await testEmail({ fullName, email, phone, wechat, subject, message });
      if (result.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
        setErrorMsg("Failed to send message. Please try again later.");
      }
    } catch {
      setFormState("error");
      setErrorMsg("An unexpected error occurred. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("contact.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("contact.breadcrumb.contact")}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: "url('/images/afrigo_contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("contact.hero.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
            {t("contact.hero.subtitle")}
          </p>
          <div className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded font-semibold">
            {t("contact.hero.badge")}
          </div>
        </div>
      </section>

      {/* Multiple Ways to Reach Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("contact.reach-us.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📱</div>
              <h3 className="font-bold mb-3">{t("contact.reach-us.phone.title")}</h3>
              <p className="text-sm text-gray-600 mb-2">{t("contact.reach-us.phone.number")}</p>
              <p className="text-xs text-gray-500 mb-4">{t("contact.reach-us.phone.hours")}</p>
              <a
                href="tel:+254XXXXXXXXX"
                className="block bg-orange-500 text-white px-6 py-2 text-sm rounded hover:bg-orange-600 transition-colors"
              >
                {t("contact.reach-us.phone.cta")}
              </a>
            </div>

            {/* Email */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">✉️</div>
              <h3 className="font-bold mb-3">{t("contact.reach-us.email.title")}</h3>
              <p className="text-sm text-gray-600 mb-2">{t("contact.reach-us.email.address")}</p>
              <p className="text-xs text-gray-500 mb-4">{t("contact.reach-us.email.sla")}</p>
              <a
                href="mailto:info@afrigo.com"
                className="block bg-blue-900 text-white px-6 py-2 text-sm rounded hover:bg-blue-800 transition-colors"
              >
                {t("contact.reach-us.email.cta")}
              </a>
            </div>

            {/* WeChat */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">💬</div>
              <h3 className="font-bold mb-3">{t("contact.reach-us.wechat.title")}</h3>
              <p className="text-sm text-gray-600 mb-2">{t("contact.reach-us.wechat.handle")}</p>
              <p className="text-xs text-gray-500 mb-4">{t("contact.reach-us.wechat.note")}</p>
              <a
                href="weixin://dl/chat?AfriGo_Official"
                className="block bg-green-600 text-white px-6 py-2 text-sm rounded hover:bg-green-700 transition-colors"
              >
                {t("contact.reach-us.wechat.cta")}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📲</div>
              <h3 className="font-bold mb-3">{t("contact.reach-us.whatsapp.title")}</h3>
              <p className="text-sm text-gray-600 mb-2">{t("contact.reach-us.whatsapp.number")}</p>
              <p className="text-xs text-gray-500 mb-4">{t("contact.reach-us.whatsapp.note")}</p>
              <a
                href="https://wa.me/254XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white px-6 py-2 text-sm rounded hover:bg-green-600 transition-colors"
              >
                {t("contact.reach-us.whatsapp.cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("contact.office.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-gray-300 border-2 border-gray-400 rounded p-8 sm:p-12 flex flex-col items-center justify-center h-64 sm:h-96">
              <div className="text-5xl sm:text-6xl mb-4">📍</div>
              <p className="text-gray-600 font-bold text-sm sm:text-base">
                {t("contact.office.map.title")}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {t("contact.office.map.subtitle")}
              </p>
            </div>

            {/* Office Info */}
            <div className="bg-white border-2 border-gray-300 rounded p-6 sm:p-8">
              <h3 className="font-bold text-lg sm:text-xl mb-6">
                {t("contact.office.card.company")}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-bold text-sm mb-1">
                    📍 {t("contact.office.card.address-label")}
                  </p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.address.line1")}</p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.address.line2")}</p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.address.city")}</p>
                </div>

                <div>
                  <p className="font-bold text-sm mb-1">
                    🕐 {t("contact.office.card.hours-label")}
                  </p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.hours.weekday")}</p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.hours.saturday")}</p>
                  <p className="text-sm text-gray-700">{t("contact.office.card.hours.sunday")}</p>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors">
                {t("contact.office.card.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Form */}
      <section className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {t("contact.form.title")}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12">{t("contact.form.subtitle")}</p>

          <form className="bg-white rounded p-6 sm:p-8 space-y-6" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("contact.form.fields.full-name")}
                </label>
                <input
                  type="text"
                  name="full-name"
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("contact.form.fields.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("contact.form.fields.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("contact.form.fields.wechat")}
                </label>
                <input
                  type="text"
                  name="wechat"
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold mb-2">
                {t("contact.form.fields.subject")}
              </label>
              <select name="subject" required className="w-full border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
                <option value="">{t("contact.form.subject-options.placeholder")}</option>
                <option value="General">{t("contact.form.subject-options.general")}</option>
                <option value="Service">{t("contact.form.subject-options.service")}</option>
                <option value="Partnership">{t("contact.form.subject-options.partnership")}</option>
                <option value="Promoter">{t("contact.form.subject-options.promoter")}</option>
                <option value="Support">{t("contact.form.subject-options.support")}</option>
                <option value="Other">{t("contact.form.subject-options.other")}</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold mb-2">
                {t("contact.form.fields.message")}
              </label>
              <textarea
                name="message"
                required
                className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 sm:h-40 resize-none focus:outline-none focus:border-blue-900"
                placeholder={t("contact.form.message-placeholder")}
              />
            </div>

            {formState === "success" && (
              <div className="text-green-600 text-center font-semibold">Message sent successfully!</div>
            )}
            {formState === "error" && (
              <div className="text-red-600 text-center font-semibold">{errorMsg}</div>
            )}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors disabled:opacity-60"
              disabled={formState === "loading"}
            >
              {formState === "loading" ? "Sending..." : t("contact.form.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("contact.faq.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q1.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q1.a")}</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q2.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q2.a")}</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q3.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q3.a")}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q4.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q4.a")}</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q5.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q5.a")}</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {t("contact.faq.q6.q")}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{t("contact.faq.q6.a")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Immediate Help */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
            {t("contact.urgent.title")}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">{t("contact.urgent.subtitle")}</p>
          <a
            href="https://wa.me/254XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-green-700 transition-colors"
          >
            {t("contact.urgent.cta")}
          </a>
        </div>
      </section>
    </div>
  );
}
