"use client";

import { ColumnDef } from "@tanstack/react-table";

import { People } from "@/people";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<People>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-blue-100 hover:text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Person ID
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    accessorKey: "email",
    header: "Eamil",
    size: 280,
  },
  {
    header: "Date of Birth",
    accessorKey: "date_of_birth",
    cell: ({ row }) => {
      const date_of_birth = row.getValue("date_of_birth");
      const formatted = new Date(date_of_birth as string).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      const personId = person.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString());
              }}
            >
              Copy Person&apos;s Name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
