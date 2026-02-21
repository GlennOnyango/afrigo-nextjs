"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Entities", href: "/admin/entities" },
  { name: "Services", href: "/admin/services" },
  { name: "Partners", href: "/admin/partners" },
  { name: "Promoters", href: "/admin/promoters" },
  { name: "Solutions", href: "/admin/solutions" },
  { name: "Users", href: "/admin/users" },
];

export function AdminTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 mb-8">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`py-2 px-4 rounded-2xl transition-colors duration-150 ${
              isActive
                ? "bg-gray-950  text-blue-300 font-semibold"
                : "border-transparent text-gray-300 hover:text-blue-300"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}

