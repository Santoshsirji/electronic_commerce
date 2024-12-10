import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";


export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser();
    
    console.log(user);
    if (user === null || !user.id) {
        redirect("/auth/login");
    }

    const store = await db.store.findFirst({
        where: {
            userId: user.id
        }
    });
    console.log(store);
    if (store) {
        redirect(`/settings/${store.id}`);
    };

    return (
        <>
            {children}
        </>
    );
};