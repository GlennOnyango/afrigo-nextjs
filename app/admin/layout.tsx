import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AdminRoute({ children }: { children: React.ReactNode }) {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user || session.user.role !== "admin") {
    redirect("/signin");
  }
  return <>{children}</>;
}
