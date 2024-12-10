"use client"

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type OrderColumn = {
    id: string;
    phone: string;
    secondPhone?: string;
    email: string;
    address: string;
    district?: string;
    isPaid: boolean;
    acknowledge: boolean;
    status?: string;
    totalPrice: string;
    products: string;
    createdAt: string;
    updatedAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "secondphone",
        header: "Secondary Phone",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "district",
        header: "District",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "totalPrice",
        header: "Total price",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
    {
        accessorKey: "acknowledge",
        header: "Acknowledge",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];