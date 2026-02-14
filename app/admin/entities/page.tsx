import { columns, Entity } from "./columns";
import { DataTable } from "./data-table";

async function getEntities(): Promise<Entity[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${baseUrl}/api/admin/entities`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.entities || [];
}

export default async function EntitiesAdminPage() {
  const entities = await getEntities();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Entities Management</h2>
      <DataTable columns={columns} data={entities} />
    </div>
  );
}
