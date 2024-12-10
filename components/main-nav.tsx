"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { FaSignOutAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/`,
            label: 'Home',
            active: pathname === `/`,
        },
        {
            href: `/settings/${params.storeId}`,
            label: 'Overview',
            active: pathname === `/settings/${params.storeId}`,
        },
        {
            href: `/settings/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname === `/settings/${params.storeId}/billboards`,
        },
        {
            href: `/settings/${params.storeId}/categories`,
            label: 'Categories',
            active: pathname === `/settings/${params.storeId}/categories`,
        },
        {
            href: `/settings/${params.storeId}/sizes`,
            label: 'Sizes',
            active: pathname === `/settings/${params.storeId}/sizes`,
        },
        {
            href: `/settings/${params.storeId}/colors`,
            label: 'Colors',
            active: pathname === `/settings/${params.storeId}/colors`,
        },
        {
            href: `/settings/${params.storeId}/products`,
            label: 'Products',
            active: pathname === `/settings/${params.storeId}/products`,
        },
        {
            href: `/settings/${params.storeId}/orders`,
            label: 'Orders',
            active: pathname === `/settings/${params.storeId}/orders`,
        },
        {
            href: `/settings/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/settings/${params.storeId}/settings`,
        },
    ]

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-primary',
                        route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                    )}
                >
                    {route.label}
                </Link>
            ))}
            <Button variant={"secondary"} onClick={() => signOut()}>
                <div className="px-1">
                Logout
                </div>
                <FaSignOutAlt className="h-4 w-4" />
            </Button>
        </nav>
    )
};