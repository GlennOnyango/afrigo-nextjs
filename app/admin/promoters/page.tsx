import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { PromotersDataTable } from "./data-table";
import { Promoter } from "./columns";

async function toggleClearedServer(id: string, cleared: boolean) {
  "use server";
  await prisma.promoter.update({
    where: { id },
    data: { cleared: !cleared },
  });
  revalidatePath("/admin/promoters");
}

export default async function PromotersAdminPage() {
  const promoters = await prisma.promoter.findMany();

  // Wrapper to call server action from client
  const onToggleCleared = async (id: string, cleared: boolean) => {
    'use server';
    await toggleClearedServer(id, cleared);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Promoters Management</h2>
      <PromotersDataTable data={promoters as Promoter[]} onToggleCleared={onToggleCleared} />
    </div>
  );
}
