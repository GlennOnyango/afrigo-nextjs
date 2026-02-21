"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { logout } from "@/app/actions"; // <-- adjust path

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "partners", href: "/partners" },
  { label: "promoter", href: "/promoter" },
  { label: "contact", href: "/contact" },
  { label: "news", href: "/news" },
];
const adminLink = { label: "admin", href: "/admin" };

export function Navbar({ isAuthenticated }: { isAuthenticated?: boolean }) {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === "cn" ? "cn" : "en";
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logout();
      router.refresh();       // important: clears server-rendered session
      router.push("/signin"); // optional
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full px-6 py-4">
        <div className="flex items-center justify-between md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Open navigation menu"
              className="rounded-full border border-black/10 p-2 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Menu className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              {[...navLinks, ...(isAuthenticated ? [adminLink] : [])].map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  onSelect={() => router.push(link.href)}
                  className={link.href === pathname ? "text-primary" : ""}
                >
                  {t(`navLinks.${link.label}`)}
                </DropdownMenuItem>
              ))}
              {isAuthenticated && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={handleLogout} disabled={pending}>
                    {pending ? "Logging out..." : "Logout"}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold tracking-widest text-white"
          >
            AFRIGO
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
              {currentLanguage.toUpperCase()}
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

        <div className="hidden items-center justify-between md:flex">
          <Link
            href="/"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold tracking-widest text-white"
          >
            AFRIGO
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-foreground">
            {[...navLinks, ...(isAuthenticated ? [adminLink] : [])].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  link.href === pathname ? "text-primary" : ""
                }`}
                aria-current={link.href === pathname ? "page" : undefined}
              >
                {t(`navLinks.${link.label}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
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

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                disabled={pending}
                className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-60"
              >
                {pending ? "Logging out..." : "Logout"}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
