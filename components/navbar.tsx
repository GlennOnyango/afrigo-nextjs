"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "partners", href: "/partners" },
  { label: "promoter", href: "/promoter" },
  { label: "contact", href: "/contact" },
  { label: "news", href: "/news" },
];

export function Navbar() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === "cn" ? "cn" : "en";
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold tracking-widest text-white"
        >
          AFRIGO
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-primary ${link.href === `${pathname}` ? "text-primary" : ""} `}
              aria-current={link.href === `${pathname}` ? "page" : undefined}
            >
              {t(`navLinks.${link.label}`)}
            </Link>
          ))}
        </nav>

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
    </header>
  );
}
