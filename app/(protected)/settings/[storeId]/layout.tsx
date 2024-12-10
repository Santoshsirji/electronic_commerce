import { redirect } from "next/navigation";
import { auth } from "@/auth";

import Navbar from "@/components/Navbar"
import { db }from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

export const revalidate = 0
export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { storeId: string }
}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/auth/login");
    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            userId: user.id,
        }
    });

    if (!store) {
        redirect("/settings");
    };

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};