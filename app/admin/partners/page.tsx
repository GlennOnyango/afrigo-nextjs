import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { PartnersDataTable } from "./data-table";
import { Partner } from "./columns";

async function toggleClearedServer(id: string, cleared: boolean) {
  "use server";
  await prisma.partner.update({
    where: { id },
    data: { cleared: !cleared },
  });
  revalidatePath("/admin/partners");
}

export default async function PartnersAdminPage() {
  const partners = await prisma.partner.findMany();

  // Wrapper to call server action from client
  const onToggleCleared = async (id: string, cleared: boolean) => {
    'use server';
    await toggleClearedServer(id, cleared);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Partners Management</h2>
      <PartnersDataTable data={partners as Partner[]} onToggleCleared={onToggleCleared} />
    </div>
  );
}
