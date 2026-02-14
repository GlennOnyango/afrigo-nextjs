"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { createSolutions } from "@/app/actions";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [wechatId, setWechatId] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeLine, setTimeLine] = useState("");
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState<string|null>(null);
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();

  const consultingOptions = [
    "supply-chain",
    "service-partnerships",
    "resource-solutions",
    "custom-solutions",
  ];
  const investorOptions = [
    "market-entry",
    "regulatory-compliance",
    "local-partners",
    "operations-setup",
  ];
  // const packageOptions = ["complete-package", "investor-package"];

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => {
      // If selecting complete-package, select all consulting options
      if (service === "complete-package") {
        // If already selected, deselect complete-package and consulting options
        if (prev.includes("complete-package")) {
          return prev.filter(
            (s) => s !== "complete-package" && !consultingOptions.includes(s)
          );
        } else {
          return [
            ...prev.filter((s) => !consultingOptions.includes(s)),
            "complete-package",
            ...consultingOptions,
          ];
        }
      }
      // If selecting investor-package, select all investor options
      if (service === "investor-package") {
        if (prev.includes("investor-package")) {
          return prev.filter(
            (s) => s !== "investor-package" && !investorOptions.includes(s)
          );
        } else {
          return [
            ...prev.filter((s) => !investorOptions.includes(s)),
            "investor-package",
            ...investorOptions,
          ];
        }
      }
      // Otherwise, toggle individual option
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">
              {t("service.breadcrumb.home")}
            </Link>{" "}
            &gt; {t("service.breadcrumb.service")}
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: "url('/images/afrigo_services_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("service.hero-section.title")}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            {t("service.hero-section.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white mb-8">
            <span>
              500+ {t("service.hero-section.stats.successful-launches")}
            </span>
            <span>|</span>
            <span>
              $50M+ {t("service.hero-section.stats.trade-facilitated")}
            </span>
            <span>|</span>
            <span>
              30-60 {t("service.hero-section.stats.verified-partners")}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#customize-solution"
              className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {t("service.hero-section.links.solution")}
            </a>
            <a
              href="#contact-section"
              className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-8 sm:px-10 py-3 rounded hover:bg-blue-50 transition-colors"
            >
              {t("service.hero-section.links.consultation")}
            </a>
          </div>
        </div>
      </section>

      {/* FOR CONSULTING CLIENTS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {t("service.consulting-section.title")}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {t("service.consulting-section.description")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage:
                  "url('/images/afrigo_services_consulting.jpg')",
              }}
            />

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Supply Chain */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t("service.consulting-section.cards.supply-chain.title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.consulting-section.cards.supply-chain.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.supply-chain.items.supplier-sourcing",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.supply-chain.items.quality-assurance",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.supply-chain.items.logistics-coordination",
                      )}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mb-4">
                    {t("service.consulting-section.cards.supply-chain.pricing")}
                  </p>
                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t("service.consulting-section.cards.supply-chain.cta")}
                  </a>
                </div>

                {/* Service Partnerships */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t(
                      "service.consulting-section.cards.service-partnerships.title",
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.consulting-section.cards.service-partnerships.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.service-partnerships.items.pre-vetted",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.service-partnerships.items.quality-guarantee",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.service-partnerships.items.bilingual-support",
                      )}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mb-4">
                    {t(
                      "service.consulting-section.cards.service-partnerships.pricing",
                    )}
                  </p>
                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t(
                      "service.consulting-section.cards.service-partnerships.cta",
                    )}
                  </a>
                </div>

                {/* Resource Solutions */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t(
                      "service.consulting-section.cards.resource-solutions.title",
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.consulting-section.cards.resource-solutions.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.resource-solutions.items.prime-locations",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.resource-solutions.items.flexible-terms",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.resource-solutions.items.scalable-solutions",
                      )}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mb-4">
                    {t(
                      "service.consulting-section.cards.resource-solutions.pricing",
                    )}
                  </p>
                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t(
                      "service.consulting-section.cards.resource-solutions.cta",
                    )}
                  </a>
                </div>

                {/* Custom Solutions */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t(
                      "service.consulting-section.cards.custom-solutions.title",
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.consulting-section.cards.custom-solutions.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.custom-solutions.items.flexible-approach",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.custom-solutions.items.scalable-packages",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.consulting-section.cards.custom-solutions.items.expert-guidance",
                      )}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mb-4">
                    {t(
                      "service.consulting-section.cards.custom-solutions.pricing",
                    )}
                  </p>
                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t("service.consulting-section.cards.custom-solutions.cta")}
                  </a>
                </div>
              </div>

              {/* Complete Package */}
              <div className="bg-orange-500 text-white rounded p-6">
                <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  {t("service.consulting-section.complete-package.title")}
                </h3>
                <p className="text-sm mb-4">
                  {t("service.consulting-section.complete-package.description")}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.consulting-section.complete-package.items.all-services",
                    )}
                  </p>
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.consulting-section.complete-package.items.priority-support",
                    )}
                  </p>
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.consulting-section.complete-package.items.dedicated-manager",
                    )}
                  </p>
                </div>

                <p className="text-sm font-semibold mb-4">
                  {t("service.consulting-section.complete-package.pricing")}
                </p>
                <a
                  href="#customize-solution"
                  className="block w-full bg-white text-orange-500 py-2 rounded text-sm text-center font-bold hover:bg-gray-100"
                >
                  {t("service.consulting-section.complete-package.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR INVESTORS */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {t("service.investor-section.title")}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {t("service.investor-section.description")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_investors.jpg')",
              }}
            />

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Market Entry */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t("service.investor-section.cards.market-entry.title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.investor-section.cards.market-entry.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.market-entry.items.company-registration",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.market-entry.items.bank-setup",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.market-entry.items.office-establishment",
                      )}
                    </p>
                  </div>

                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t("service.investor-section.cards.market-entry.cta")}
                  </a>
                </div>

                {/* Regulatory Compliance */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t(
                      "service.investor-section.cards.regulatory-compliance.title",
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.investor-section.cards.regulatory-compliance.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.regulatory-compliance.items.licenses-permits",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.regulatory-compliance.items.tax-registration",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.regulatory-compliance.items.legal-compliance",
                      )}
                    </p>
                  </div>

                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t(
                      "service.investor-section.cards.regulatory-compliance.cta",
                    )}
                  </a>
                </div>

                {/* Local Partners */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t("service.investor-section.cards.local-partners.title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.investor-section.cards.local-partners.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.local-partners.items.partner-identification",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.local-partners.items.due-diligence",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.local-partners.items.relationship-management",
                      )}
                    </p>
                  </div>

                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t("service.investor-section.cards.local-partners.cta")}
                  </a>
                </div>

                {/* Operations Setup */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {t("service.investor-section.cards.operations-setup.title")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(
                      "service.investor-section.cards.operations-setup.description",
                    )}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.operations-setup.items.staffing-hr",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.operations-setup.items.systems-setup",
                      )}
                    </p>
                    <p className="text-sm text-green-600">
                      ✓{" "}
                      {t(
                        "service.investor-section.cards.operations-setup.items.process-optimization",
                      )}
                    </p>
                  </div>

                  <a
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {t("service.investor-section.cards.operations-setup.cta")}
                  </a>
                </div>
              </div>

              {/* Investor Package */}
              <div className="bg-orange-500 text-white rounded p-6">
                <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  {t("service.investor-section.investor-package.title")}
                </h3>
                <p className="text-sm mb-4">
                  {t("service.investor-section.investor-package.description")}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.investor-section.investor-package.items.all-services",
                    )}
                  </p>
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.investor-section.investor-package.items.dedicated-manager",
                    )}
                  </p>
                  <p className="text-sm">
                    ✓{" "}
                    {t(
                      "service.investor-section.investor-package.items.launch-guarantee",
                    )}
                  </p>
                </div>

                <a
                  href="#customize-solution"
                  className="block w-full bg-white text-orange-500 py-2 rounded text-sm text-center font-bold hover:bg-gray-100"
                >
                  {t("service.investor-section.investor-package.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR RESOURCE PARTNERS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {t("service.partners-section.title")}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {t("service.partners-section.description")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_partners.jpg')",
              }}
            />

            <div className="lg:col-span-7">
              <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                  {t("service.partners-section.benefits.title")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="space-y-3">
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t(
                          "service.partners-section.benefits.items.qualified-leads",
                        )}
                      </span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t(
                          "service.partners-section.benefits.items.referral-revenue",
                        )}
                      </span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t(
                          "service.partners-section.benefits.items.partner-manager",
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t("service.partners-section.benefits.items.support")}
                      </span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t("service.partners-section.benefits.items.marketing")}
                      </span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>
                        {t(
                          "service.partners-section.benefits.items.grow-with-afrigo",
                        )}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-base sm:text-lg mb-4 text-blue-900">
                    {t("service.partners-section.categories.title")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                    {[
                      "hotels",
                      "transport",
                      "legal",
                      "financial",
                      "real-estate",
                      "staffing",
                      "translation",
                      "it",
                      "more",
                    ].map((k) => (
                      <p key={k} className="flex items-center">
                        <span className="text-blue-900 mr-2">•</span>
                        {t(`service.partners-section.categories.items.${k}`)}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/partners"
                    className="flex-1 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors text-center font-semibold"
                  >
                    {t("service.partners-section.links.become-partner")}
                  </a>
                  <a
                    href="/partners/directory"
                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors text-center font-semibold"
                  >
                    {t("service.partners-section.links.view-directory")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PROMOTERS */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {t("service.promoters-section.title")}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {t("service.promoters-section.description")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_promoters.jpg')",
              }}
            />

            <div className="lg:col-span-7">
              <div className="bg-white rounded p-6 sm:p-8 border-2 border-gray-300">
                <h3 className="font-bold text-xl sm:text-2xl mb-6 text-center text-blue-900">
                  {t("service.promoters-section.how-it-works.title")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="text-center p-4 bg-gray-50 rounded">
                      <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                        {n}
                      </div>
                      <p className="text-sm font-semibold mb-2 text-blue-900">
                        {t(
                          `service.promoters-section.how-it-works.steps.step-${n}.title`,
                        )}
                      </p>
                      <p className="text-xs text-gray-600">
                        {t(
                          `service.promoters-section.how-it-works.steps.step-${n}.description`,
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href="/promoter"
                    className="inline-block bg-blue-900 text-white px-10 py-4 text-lg rounded hover:bg-blue-800 transition-colors font-semibold"
                  >
                    {t("service.promoters-section.cta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZE YOUR SOLUTION */}
      <section id="customize-solution" className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {t("service.customize-section.title")}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12 text-sm sm:text-base">
            {t("service.customize-section.description")}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3">
                  {n}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                  {t(`service.customize-section.steps.step-${n}.title`)}
                </h3>
                <p className="text-xs text-gray-200">
                  {t(`service.customize-section.steps.step-${n}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
              {t("service.customize-section.form.title")}
            </h3>

            <form
              className="bg-white rounded p-6 sm:p-8 space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setMessage(null);
                // Split selectedServices into consulting/investor
                const consultingOptions = [
                  "supply-chain",
                  "service-partnerships",
                  "resource-solutions",
                  "custom-solutions",
                ];
                const investorOptions = [
                  "market-entry",
                  "regulatory-compliance",
                  "local-partners",
                  "operations-setup",
                ];
                const consultingServices = selectedServices.filter((s) => consultingOptions.includes(s) || s === "complete-package");
                const investorServices = selectedServices.filter((s) => investorOptions.includes(s) || s === "investor-package");
                startTransition(async () => {
                  try {
                    const formData = new FormData();
                    consultingServices.forEach((s) => formData.append("consultingServices", s));
                    investorServices.forEach((s) => formData.append("investorServices", s));
                    formData.append("fullName", fullName);
                    formData.append("wechatId", wechatId);
                    formData.append("emailAddress", emailAddress);
                    formData.append("companyName", companyName);
                    formData.append("industry", industry);
                    formData.append("budgetRange", budgetRange);
                    formData.append("timeLine", timeLine);
                    formData.append("details", details);
                    const result = await createSolutions(formData);
                    if (result.success) {
                      setMessage("Submission successful!");
                      toast.success("Solution submitted successfully!", {
                        description: "Thank you for your request. We have received your solution details and will get in touch soon.",
                        duration: 3000,
                        position: "top-right",
                      });
                      setSelectedServices([]);
                      setFullName("");
                      setWechatId("");
                      setEmailAddress("");
                      setCompanyName("");
                      setIndustry("");
                      setBudgetRange("");
                      setTimeLine("");
                      setDetails("");
                    } else {
                      setMessage(result.message || "Submission failed. Please try again.");
                    }
                  } catch {
                    setMessage("Submission failed. Please try again.");
                  }
                });
              }}
            >
              <div>
                <label className="block text-sm font-bold mb-4 text-blue-900">
                  {t("service.customize-section.form.services-label")}
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Consulting */}
                  <div className="border-2 border-gray-200 rounded p-4 hover:border-blue-900 transition-colors">
                    <p className="font-semibold text-blue-900 mb-3 text-sm">
                      {t("service.customize-section.form.groups.consulting")}
                    </p>

                    {[
                      "supply-chain",
                      "service-partnerships",
                      "resource-solutions",
                      "custom-solutions",
                    ].map((key) => (
                      <label
                        key={key}
                        className="flex items-start mb-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-3 mt-1"
                          value={key}
                          checked={selectedServices.includes(key)}
                          onChange={(e) => handleServiceToggle(e.target.value)}
                        />
                        <span className="text-sm">
                          {t(`service.customize-section.form.services.${key}`)}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Investor */}
                  <div className="border-2 border-gray-200 rounded p-4 hover:border-blue-900 transition-colors">
                    <p className="font-semibold text-blue-900 mb-3 text-sm">
                      {t("service.customize-section.form.groups.investor")}
                    </p>

                    {[
                      "market-entry",
                      "regulatory-compliance",
                      "local-partners",
                      "operations-setup",
                    ].map((key) => (
                      <label
                        key={key}
                        className="flex items-start mb-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-3 mt-1"
                          value={key}
                          checked={selectedServices.includes(key)}
                          onChange={(e) => handleServiceToggle(e.target.value)}
                        />
                        <span className="text-sm">
                          {t(`service.customize-section.form.services.${key}`)}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Packages */}
                  <div className="md:col-span-2 border-2 border-orange-500 rounded p-4 bg-orange-50">
                    <p className="font-semibold text-orange-600 mb-3 text-sm">
                      {t("service.customize-section.form.groups.packages")}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["complete-package", "investor-package"].map((key) => (
                        <label
                          key={key}
                          className="flex items-start cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="mr-3 mt-1"
                            value={key}
                            checked={selectedServices.includes(key)}
                            onChange={(e) =>
                              handleServiceToggle(e.target.value)
                            }
                          />
                          <span className="text-sm font-semibold">
                            {t(
                              `service.customize-section.form.services.${key}`,
                            )}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.full-name.label")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* WeChat */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.wechat.label")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                  value={wechatId}
                  onChange={(e) => setWechatId(e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.email.label")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.company.label")}
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.industry.label")}
                </label>
                <select
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                >
                  <option value="">
                    {t("service.customize-section.form.industry.placeholder")}
                  </option>
                  <option value="manufacturing">
                    {t("service.customize-section.form.industry.options.manufacturing")}
                  </option>
                  <option value="retail">
                    {t("service.customize-section.form.industry.options.retail")}
                  </option>
                  <option value="technology">
                    {t("service.customize-section.form.industry.options.technology")}
                  </option>
                  <option value="logistics">
                    {t("service.customize-section.form.industry.options.logistics")}
                  </option>
                  <option value="construction">
                    {t("service.customize-section.form.industry.options.construction")}
                  </option>
                  <option value="agriculture">
                    {t("service.customize-section.form.industry.options.agriculture")}
                  </option>
                  <option value="other">
                    {t("service.customize-section.form.industry.options.other")}
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.budget.label")}
                </label>
                <select
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                >
                  <option value="">
                    {t("service.customize-section.form.budget.placeholder")}
                  </option>
                  <option value="under-10k">
                    {t("service.customize-section.form.budget.options.under-10k")}
                  </option>
                  <option value="10k-50k">
                    {t("service.customize-section.form.budget.options.10k-50k")}
                  </option>
                  <option value="50k-100k">
                    {t("service.customize-section.form.budget.options.50k-100k")}
                  </option>
                  <option value="100k-250k">
                    {t("service.customize-section.form.budget.options.100k-250k")}
                  </option>
                  <option value="250k-plus">
                    {t("service.customize-section.form.budget.options.250k-plus")}
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.timeline.label")}
                </label>
                <select
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white"
                  value={timeLine}
                  onChange={(e) => setTimeLine(e.target.value)}
                >
                  <option value="">
                    {t("service.customize-section.form.timeline.placeholder")}
                  </option>
                  <option value="immediately">
                    {t("service.customize-section.form.timeline.options.immediately")}
                  </option>
                  <option value="within-1-month">
                    {t("service.customize-section.form.timeline.options.within-1-month")}
                  </option>
                  <option value="1-3-months">
                    {t("service.customize-section.form.timeline.options.1-3-months")}
                  </option>
                  <option value="3-6-months">
                    {t("service.customize-section.form.timeline.options.3-6-months")}
                  </option>
                  <option value="just-exploring">
                    {t("service.customize-section.form.timeline.options.just-exploring")}
                  </option>
                </select>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {t("service.customize-section.form.details.label")}
                </label>
                <textarea
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"
                  placeholder={t("service.customize-section.form.details.placeholder")}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>


              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : t("service.customize-section.form.submit")}
              </button>

              {message && (
                <p className="text-center text-sm mt-2 text-blue-900">{message}</p>
              )}

              <p className="text-xs text-gray-600 text-center">
                {t("service.customize-section.form.consent")}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("service.trusted-section.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["t1", "t2", "t3"].map((k) => (
              <div
                key={k}
                className="bg-gray-50 border-2 border-gray-300 rounded p-6 hover:border-blue-900 transition-colors"
              >
                <div className="text-orange-500 mb-3">
                  {t("service.trusted-section.stars")}
                </div>
                <p className="font-bold text-sm mb-3">
                  &quot;{t(`service.trusted-section.items.${k}.quote`)}&quot;
                </p>
                <p className="text-xs text-gray-600 mb-1">
                  — {t(`service.trusted-section.items.${k}.company`)}
                </p>
                <p className="text-xs text-blue-600">
                  {t(`service.trusted-section.items.${k}.service`)}{" "}
                  {t(`service.trusted-section.items.${k}.used`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {t("service.faq-section.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {["q1", "q2", "q3", "q4", "q5", "q6"].map((qKey, idx) => (
              <div
                key={qKey}
                className={idx % 3 === 0 ? "space-y-6" : "space-y-6"}
              >
                {/* We'll render as individual blocks below for simplicity */}
              </div>
            ))}

            {/* Simple explicit rendering to preserve your existing layout */}
            <div className="space-y-6">
              {["q1", "q2", "q3"].map((k) => (
                <div
                  key={k}
                  className="bg-white p-6 rounded border-2 border-gray-200"
                >
                  <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                    {t(`service.faq-section.items.${k}.q`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {t(`service.faq-section.items.${k}.a`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {["q4", "q5", "q6"].map((k) => (
                <div
                  key={k}
                  className="bg-white p-6 rounded border-2 border-gray-200"
                >
                  <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                    {t(`service.faq-section.items.${k}.q`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {t(`service.faq-section.items.${k}.a`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {t("service.contact-section.title")}
          </h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            {t("service.contact-section.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:+254XXXXXXXXX"
              className="bg-blue-900 text-white p-6 rounded-lg hover:bg-blue-800 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📞</div>
              <span className="font-bold text-base">
                {t("service.contact-section.cards.call.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("service.contact-section.cards.call.description")}
              </span>
            </a>

            <a
              href="weixin://dl/chat?wechat_id_placeholder"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">💬</div>
              <span className="font-bold text-base">
                {t("service.contact-section.cards.wechat.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("service.contact-section.cards.wechat.description")}
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
                {t("service.contact-section.cards.whatsapp.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("service.contact-section.cards.whatsapp.description")}
              </span>
            </a>

            <a
              href="/contact"
              className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📅</div>
              <span className="font-bold text-base">
                {t("service.contact-section.cards.schedule.label")}
              </span>
              <span className="text-xs opacity-80">
                {t("service.contact-section.cards.schedule.description")}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
