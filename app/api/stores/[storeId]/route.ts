import { auth } from '@/auth';
import { NextResponse } from 'next/server';


import {db} from '@/lib/db';
import getCurrentUser from '@/actions/getCurrentUser';


export async function DELETE (
    req: Request,
    {params} : {params: {storeId: string}}
) {
    try {
    const user = await getCurrentUser();

    if(!user) {
        return new NextResponse("Unauthorized", {status: 401});
    };

    if(!params.storeId){
        return new NextResponse("Store id is required", {status: 400});
    }
    console.log("Hello I am here")
    const store = await db.store.deleteMany({
        where: {
            id: params.storeId,
            userId: user.id
        },
    });
    console.log(store);

    return NextResponse.json(store);
    } catch (error) {
        console.log("Store Delete Error", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}

export async function PATCH (
    req: Request,
    {params} : {params: {storeId: string}}
) {
    try {
    const user = await getCurrentUser();
    
    const body = await req.json();

    const { name } = body;

    if(!user) {
        return new NextResponse("Unauthorized", {status: 401});
    };
    if(!name) {
        return new NextResponse("Name is required", {status: 400});
    }
    if(!params.storeId){
        return new NextResponse("Store id is required", {status: 400});
    }
    
    const store = await db.store.updateMany({
        where: {
            id: params.storeId,
            userId: user.id
        },
        data: {
            name
        }
    });

    return NextResponse.json(store);
    } catch (error) {
        console.log("Store Patch Error", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}