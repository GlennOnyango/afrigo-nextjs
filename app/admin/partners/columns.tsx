import { ColumnDef } from "@tanstack/react-table";

export type Partner = {
  id: string;
  companyName: string;
  contactPerson: string;
  position: string;
  phoneOrEmail: string;
  businessCategory: string;
  cleared: boolean;
};

export function getPartnerColumns(toggleCleared: (id: string, cleared: boolean) => React.ReactNode): ColumnDef<Partner>[] {
  return [
    {
      accessorKey: "companyName",
      header: "Company Name",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "contactPerson",
      header: "Contact Person",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "phoneOrEmail",
      header: "Phone/Email",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "businessCategory",
      header: "Business Category",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "cleared",
      header: "Cleared",
      cell: info => (info.row.original.cleared ? "Yes" : "No"),
    },
    {
      id: "actions",
      header: "Actions",
      cell: info => toggleCleared(info.row.original.id, info.row.original.cleared),
    },
  ];
}
