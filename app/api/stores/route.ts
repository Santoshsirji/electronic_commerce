import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";
export async function POST(
    req: Request
){
    try {
    
        const user = await getCurrentUser();
        const body = await req.json();

        const { name } = body;


        if(!user) {
            return new NextResponse("Unauthorized", {status: 401});

        }

        if(!name){
            return new NextResponse("Name is required", {status: 400});
        }

        const store = await db.store.create({
            data: {
                name,
                userId: user.id
            }
        })
        return NextResponse.json(store)
    } catch (error) {
        console.log("[STORES_POST]", error);
        return new NextResponse("Internal error", {status: 500})
    }
}