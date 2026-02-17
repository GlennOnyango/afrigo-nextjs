"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { registerPromoter } from "../actions";

export default function PromoterPage() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFormState(null);
    const formData = new FormData(e.currentTarget);
    // Map UI field names to backend expected keys
    formData.set("fullName", formData.get("full-name") || "");
    formData.set("email", formData.get("email") || "");
    formData.set("phoneNumber", formData.get("phone") || "");
    formData.set("weChatId", formData.get("wechat") || "");
    formData.set("promotePlan", formData.get("how-promote") || "");

    const result = await registerPromoter(formData);
    setFormState(result);
    setLoading(false);
    if (result.success && formRef.current) {
      formRef.current.reset();
      toast.success("Promoter registration successful!", {
        description: "Thank you for registering as a promoter. We have received your details and will get in touch soon.",
        duration: 3000,
        position: "top-right",
      });
    }
  }

  const howItWorksSteps = [
    { num: 1, key: "1" },
    { num: 2, key: "2" },
    { num: 3, key: "3" },
    { num: 4, key: "4" },
  ] as const;

  const benefits = [
    { icon: "💵", key: "passive-income" },
    { icon: "🎯", key: "no-experience" },
    { icon: "📊", key: "tracking" },
    { icon: "🤝", key: "support" },
    { icon: "🎁", key: "bonuses" },
    { icon: "🌍", key: "anywhere" },
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("promoter.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("promoter.breadcrumb.promoter-center")}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/afrigo_promoter.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
            💰
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            {t("promoter.hero.headline-1")}
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
            {t("promoter.hero.headline-2")}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
            {t("promoter.hero.description")}
          </p>

          <div className="bg-white border-2 border-gray-300 rounded p-4 sm:p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("promoter.hero.stats.active-promoters")}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                  $100K+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("promoter.hero.stats.paid-commissions")}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-4">
              {t("promoter.hero.stats.note")}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("promoter.how-it-works.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.num}
                className="border-2 border-gray-300 rounded p-6 text-center"
              >
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-3">
                  {t(`promoter.how-it-works.steps.${step.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(`promoter.how-it-works.steps.${step.key}.desc`)}
                </p>
                <div className="bg-blue-900 text-white py-2 text-sm rounded">
                  {t(`promoter.how-it-works.steps.${step.key}.badge`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="promoter-form" className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {t("promoter.form.title")}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12 text-sm sm:text-base">
            {t("promoter.form.subtitle")}
          </p>

          <form
            className="bg-white rounded p-6 sm:p-8 space-y-6"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div>
              <label className="block text-sm font-bold mb-2">
                {t("promoter.form.fields.full-name")}
              </label>
              <input
                name="full-name"
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {t("promoter.form.fields.email")}
              </label>
              <input
                name="email"
                type="email"
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {t("promoter.form.fields.phone")}
              </label>
              <input
                name="phone"
                type="tel"
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {t("promoter.form.fields.wechat")}
              </label>
              <input
                name="wechat"
                type="text"
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {t("promoter.form.fields.how-promote-label")}
              </label>
              <textarea
                name="how-promote"
                className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"
                placeholder={t("promoter.form.fields.how-promote-placeholder")}
                required
              />
            </div>

            {formState && (
              <div
                className={`text-center font-bold p-3 rounded mb-2 ${formState.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {formState.message}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 sm:py-4 text-base sm:text-lg font-bold rounded hover:bg-orange-600 transition-colors"
              disabled={loading}
            >
              {loading
                ? t("Submitting")
                : t("promoter.form.button")}
            </button>

            {/* <p className="text-center text-xs sm:text-sm text-gray-600">
              {t("promoter.form.already")}{" "}
              <a
                href="#"
                className="text-blue-900 font-semibold hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert(t("promoter.form.login-soon"));
                }}
              >
                {t("promoter.form.login")}
              </a>
            </p> */}
          </form>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("promoter.benefits.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((b) => (
              <div
                key={b.key}
                className="bg-white border-2 border-gray-300 rounded p-6 sm:p-8 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-3">
                  {t(`promoter.benefits.items.${b.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`promoter.benefits.items.${b.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("promoter.faq.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              {["q1", "q2", "q3"].map((k) => (
                <div key={k}>
                  <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                    {t(`promoter.faq.${k}.q`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {t(`promoter.faq.${k}.a`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {["q4", "q5", "q6"].map((k) => (
                <div key={k}>
                  <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                    {t(`promoter.faq.${k}.q`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {t(`promoter.faq.${k}.a`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("promoter.final-cta.title")}
          </h2>
          <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">
            {t("promoter.final-cta.description")}
          </p>
          <a
            href="#promoter-form"
            className="inline-block bg-orange-500 text-white px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-orange-600 transition-colors"
          >
            {t("promoter.final-cta.button")}
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            {t("promoter.contact-cta.title")}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            {t("promoter.contact-cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-900 text-white px-8 sm:px-10 py-3 rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              {t("promoter.contact-cta.contact")}
            </a>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              {t("promoter.contact-cta.schedule")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
