import { prisma } from "@/lib/prisma";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function EntitiesAdminPage() {
  const entitiesRaw = await prisma.entity.findMany();
  const entities = entitiesRaw.map(entity => ({
    ...entity,
    additionalRequirements: entity.additionalRequirements === null ? undefined : entity.additionalRequirements,
  }));
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Entities Management</h2>
      <DataTable columns={columns} data={entities} />
    </div>
  );
}
