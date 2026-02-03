"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white/70 py-32 px-16 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground">
            {t("brand")}
          </h1>
          <p className="max-w-md text-lg leading-8 text-black/60">
            {t("tagline")}
          </p>
          <div className="flex items-center gap-3 text-sm font-medium text-black/60">
            <span>{t("language")}:</span>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={`rounded-full border px-3 py-1 transition-colors ${
                i18n.language === "en"
                  ? "border-primary text-primary"
                  : "border-black/10 text-black/60 hover:border-primary/40"
              }`}
            >
              {t("english")}
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("cn")}
              className={`rounded-full border px-3 py-1 transition-colors ${
                i18n.language === "cn"
                  ? "border-primary text-primary"
                  : "border-black/10 text-black/60 hover:border-primary/40"
              }`}
            >
              {t("chinese")}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-white transition-colors hover:brightness-95 md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {t("ctaPrimary")}
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/10 px-5 transition-colors hover:border-transparent hover:bg-secondary/20 md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </main>
    </div>
  );
}
