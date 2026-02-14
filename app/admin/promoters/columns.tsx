import { ColumnDef } from "@tanstack/react-table";

export type Promoter = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  weChatId?: string;
  promotePlan: string;
  cleared: boolean;
};

export function getPromoterColumns(toggleCleared: (id: string, cleared: boolean) => React.ReactNode): ColumnDef<Promoter>[] {
  return [
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "weChatId",
      header: "WeChat ID",
      cell: info => info.getValue() || "-",
    },
    {
      accessorKey: "promotePlan",
      header: "Promote Plan",
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
