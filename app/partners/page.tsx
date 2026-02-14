"use client";


import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { registerPartner } from "../actions";

export default function ResourcePartnersPage() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFormState(null);
    const formData = new FormData(e.currentTarget);
    // Map UI field names to backend expected keys
    formData.set("companyName", formData.get("company-name") || "");
    formData.set("contactPerson", formData.get("contact-person") || "");
    formData.set("position", formData.get("position") || "");
    formData.set("phoneOrEmail", formData.get("phone-email") || "");
    formData.set("businessCategory", formData.get("business-category") || "");
    formData.set("yearsInOperation", formData.get("years-in-operation") || "");
    formData.set("location", formData.get("location-coverage") || "");
    formData.set("businessRegistrationNumber", formData.get("business-reg-number") || "");
    formData.set("website", formData.get("website") || "");
    formData.set("servicesOffered", formData.get("services-offered") || "");
    formData.set("reason", formData.get("why-partner") || "");

    const result = await registerPartner(formData);
    setFormState(result);
    setLoading(false);
    if (result.success && formRef.current) {
      formRef.current.reset();
      toast.success("Partner application successful!", {
        description: "Thank you for your application. We have received your details and will get in touch soon.",
        duration: 3000,
        position: "top-right",
      });
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("resource-partners.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("resource-partners.breadcrumb.resource-partners")}
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: "url('/images/afrigo_partners.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("resource-partners.hero.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
            {t("resource-partners.hero.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">200+</p>
              <p className="text-sm">
                {t("resource-partners.hero.stats.active-partners")}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
              <p className="text-sm">
                {t("resource-partners.hero.stats.monthly-leads")}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">95%</p>
              <p className="text-sm">
                {t("resource-partners.hero.stats.satisfaction-rate")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("resource-partners.why.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", key: "b1" },
              { icon: "💰", key: "b2" },
              { icon: "🤝", key: "b3" },
              { icon: "📈", key: "b4" },
            ].map((b) => (
              <div
                key={b.key}
                className="border-2 border-gray-300 rounded p-6 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">{b.icon}</div>
                <h3 className="font-bold mb-3">
                  {t(`resource-partners.why.benefits.${b.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`resource-partners.why.benefits.${b.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {t("resource-partners.categories.title")}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {t("resource-partners.categories.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏨", key: "hotels" },
              { icon: "🚗", key: "transport" },
              { icon: "⚖️", key: "legal" },
              { icon: "💼", key: "financial" },
              { icon: "🏢", key: "real-estate" },
              { icon: "👔", key: "staffing" },
              { icon: "🌐", key: "translation" },
              { icon: "🔧", key: "other" },
            ].map((c) => (
              <div
                key={c.key}
                className="bg-white border-2 border-gray-300 rounded p-6"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold mb-2">
                  {t(`resource-partners.categories.items.${c.key}.title`)}
                </h3>
                <p className="text-xs text-gray-600">
                  {t(`resource-partners.categories.items.${c.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Directory */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 text-center">
            {t("resource-partners.directory.title")}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-center">
            {t("resource-partners.directory.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder={t("resource-partners.directory.search.placeholder")}
              className="flex-1 border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
            />
            <select className="border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
              <option>
                {t("resource-partners.directory.search.category-filter")}
              </option>
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
              {t("resource-partners.directory.search.button")}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                nameKey: "p1",
                ratingKey: "r1",
              },
              {
                nameKey: "p2",
                ratingKey: "r2",
              },
              {
                nameKey: "p3",
                ratingKey: "r3",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 border-2 border-gray-300 rounded p-6"
              >
                <div className="bg-gray-200 h-20 mb-4 flex items-center justify-center border border-gray-400">
                  <span className="text-gray-500 text-xs">LOGO</span>
                </div>

                <h3 className="font-bold mb-2">
                  {t(
                    `resource-partners.directory.preview.partners.${p.nameKey}.name`,
                  )}
                </h3>

                <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded inline-block mb-3">
                  {t(
                    `resource-partners.directory.preview.partners.${p.nameKey}.category`,
                  )}
                </div>

                <p className="text-sm text-orange-500 mb-2">
                  {t(
                    `resource-partners.directory.preview.rating-labels.${p.ratingKey}`,
                  )}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  📍{" "}
                  {t(
                    `resource-partners.directory.preview.partners.${p.nameKey}.location`,
                  )}
                </p>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-900 text-white text-sm py-2 rounded hover:bg-blue-800">
                    {t(
                      "resource-partners.directory.preview.buttons.view-profile",
                    )}
                  </button>
                  <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700">
                    {t("resource-partners.directory.preview.buttons.contact")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/partners/directory"
              className="inline-block bg-blue-900 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-blue-800 transition-colors"
            >
              {t("resource-partners.directory.browse-button")}
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("resource-partners.application-process.title")}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                  {n}
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">
                  {t(
                    `resource-partners.application-process.steps.step-${n}.title`,
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t(
                    `resource-partners.application-process.steps.step-${n}.description`,
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {t("resource-partners.form.title")}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12">
            {t("resource-partners.form.description")}
          </p>

          <form
            className="bg-white rounded p-6 sm:p-8 space-y-6"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">
                {t("resource-partners.form.sections.company-information")}
              </h3>

              <div className="space-y-4">
                {[ 
                  { key: "company-name", type: "text" },
                  { key: "contact-person", type: "text" },
                  { key: "position", type: "text" },
                  { key: "phone-email", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-bold mb-2">
                      {t(`resource-partners.form.fields.${f.key}`)}
                    </label>
                    <input
                      name={f.key}
                      type={f.type}
                      className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">
                {t("resource-partners.form.sections.business-details")}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    {t("resource-partners.form.fields.business-category")}
                  </label>
                  <select
                    name="business-category"
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900"
                    required
                  >
                    <option>
                      {t("resource-partners.form.fields.select-category")}
                    </option>
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
                      {t(
                        "resource-partners.categories.items.real-estate.title",
                      )}
                    </option>
                    <option>
                      {t("resource-partners.categories.items.staffing.title")}
                    </option>
                    <option>
                      {t(
                        "resource-partners.categories.items.translation.title",
                      )}
                    </option>
                    <option>
                      {t("resource-partners.categories.items.other.title")}
                    </option>
                  </select>
                </div>

                {[
                  { key: "years-in-operation", type: "text" },
                  { key: "location-coverage", type: "text" },
                  { key: "business-reg-number", type: "text" },
                  { key: "website", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-bold mb-2">
                      {t(`resource-partners.form.fields.${f.key}`)}
                    </label>
                    <input
                      name={f.key}
                      type={f.type}
                      className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                      required={f.key !== "website"}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {t("resource-partners.form.fields.services-offered")}
                  </label>
                  <textarea
                    name="services-offered"
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 h-24 resize-none focus:outline-none focus:border-blue-900"
                    placeholder={t(
                      "resource-partners.form.fields.services-offered-placeholder",
                    )}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {t("resource-partners.form.fields.why-partner")}
                  </label>
                  <textarea
                    name="why-partner"
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"
                    required
                  />
                </div>
              </div>
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
              className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors"
              disabled={loading}
            >
              {loading ? t("resource-partners.form.submitting") : t("resource-partners.form.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("resource-partners.success-stories.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["s1", "s2", "s3"].map((k) => (
              <div key={k} className="border-2 border-gray-300 rounded p-6">
                <p className="font-bold text-lg mb-2">
                  &quot;{t(`resource-partners.success-stories.stories.${k}.quote`)}&quot;
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {t(`resource-partners.success-stories.stories.${k}.detail`)}
                </p>
                <p className="text-sm text-blue-900">
                  —{" "}
                  {t(`resource-partners.success-stories.stories.${k}.partner`)}
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
