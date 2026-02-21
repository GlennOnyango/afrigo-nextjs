"use client";
import { DataTable } from "@/app/admin/entities/data-table";
import { getPromoterColumns, Promoter } from "./columns";
import { useTransition } from "react";

interface PromotersTableProps {
  data: Promoter[];
  onToggleCleared: (id: string, cleared: boolean) => void;
}

export function PromotersDataTable({
  data,
  onToggleCleared,
}: PromotersTableProps) {
  const [isPending, startTransition] = useTransition();
  const columns = getPromoterColumns((id, cleared) => (
    <button
      className={`${cleared ? "bg-red-600" : "bg-blue-600"} text-white px-3 py-1 rounded`}
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => onToggleCleared(id, cleared))}
    >
      {cleared ? "Deactivate" : "Activate"}
    </button>
  ));
  return <DataTable columns={columns} data={data} />;
}
