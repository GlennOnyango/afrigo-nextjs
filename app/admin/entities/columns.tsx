"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Entity = {
  id: string;
  fullName: string;
  weChatId: string;
  emailAddress: string;
  entityType: string;
  additionalRequirements?: string;
};

export const columns: ColumnDef<Entity>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "weChatId",
    header: "WeChat ID",
  },
  {
    accessorKey: "emailAddress",
    header: "Email Address",
  },
  {
    accessorKey: "entityType",
    header: "Entity Type",
  },
  {
    accessorKey: "additionalRequirements",
    header: "Additional Requirements",
  },
];
