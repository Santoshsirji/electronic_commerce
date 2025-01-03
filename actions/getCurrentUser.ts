import { auth } from "@/auth";
import {db} from "@/lib/db";

export async function getSession() {
    return await auth();
}

export default async function getCurrentUser(){
 
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await db.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        if (!currentUser) {
            return null; // Immediately return if no user is found
        }
        return {...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null
        };
    }
    catch(error){
        return null;
    }
}