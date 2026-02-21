import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AdminTabs } from "./admin-tabs";

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

  return (
    <div className="min-h-screen flex flex-row">
      <section className="bg-gray-800 text-white p-4 max-w-1/5 min-w-1/5 w-1/5">
        <h1 className="text-3xl mb-6 font-bold">Admin Dashboard</h1>
        <div className="mb-6 p-3 rounded bg-gray-700">
          <div className="font-semibold">{userName}</div>
          <div className="text-xs text-gray-300">Role: {userRole}</div>
        </div>
        <AdminTabs />
      </section>
      <section className="p-4 flex-1">{children}</section>
    </div>
  );
}
