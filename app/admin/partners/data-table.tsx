"use client";
import { DataTable } from "@/app/admin/entities/data-table";
import { getPartnerColumns, Partner } from "./columns";
import { useTransition } from "react";

interface PartnersTableProps {
  data: Partner[];
  onToggleCleared: (id: string, cleared: boolean) => void;
}

export function PartnersDataTable({ data, onToggleCleared }: PartnersTableProps) {
  const [isPending, startTransition] = useTransition();
  const columns = getPartnerColumns((id, cleared) => (
    <button
      className="bg-blue-600 text-white px-3 py-1 rounded"
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => onToggleCleared(id, cleared))}
    >
      {cleared ? "Set as Not Cleared" : "Set as Cleared"}
    </button>
  ));
  return <DataTable columns={columns} data={data} />;
}
