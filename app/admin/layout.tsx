import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user || session.user.role !== "admin") {
    redirect("/signin");
  }

  // Show user info for authenticated admin
  const userName = session.user.name || session.user.email || "Admin";
  const userRole = session.user.role;

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const tabs = [
    { name: "Entities", href: "/admin/entities" },
    { name: "Services", href: "/admin/services" },
    { name: "Partners", href: "/admin/partners" },
    { name: "Promoters", href: "/admin/promoters" },
    { name: "Solutions", href: "/admin/solutions" },
    { name: "Users", href: "/admin/users" },
  ];
  return (
    <div className="min-h-screen flex flex-row">
      <section className="bg-gray-800 text-white p-4 max-w-1/5 min-w-1/5 w-1/5">
        <h1 className="text-3xl mb-6 font-bold">Admin Dashboard</h1>
        <div className="mb-6 p-3 rounded bg-gray-700">
          <div className="font-semibold">{userName}</div>
          <div className="text-xs text-gray-300">Role: {userRole}</div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`py-2 px-4 border-b-2 transition-colors duration-150 ${pathname.startsWith(tab.href) ? "border-blue-600 text-blue-600 font-semibold" : "border-transparent text-gray-600 hover:text-blue-600"}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="p-4 flex-1">{children}</section>
    </div>
  );
}
