import { NextResponse } from "next/server";

import { db } from "@/lib/db";


export async function POST(req: Request) {


  const {
     productIds,
     name,
     phone,
     secondphone,
     email,
     address,
     district,
     acknowledge

   } = await req.json();
   const storeId = `${process.env.STOREID}`

  if(!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400});
  }

  const products = await db.product.findMany({
    where: {
        id: {
            in: productIds
        }
    }
  });

  for (const product of products) {
   if(typeof product.price !== 'number') {
    console.error("Product price is not a number: ", product.price);
    return new NextResponse("Invalid product price", { status: 400});
   }
  }

  const order = await db.order.create({

    data: {
        storeId,
        name,
        phone,
        secondphone,
        email,
        address,
        district,
        isPaid: false,
        acknowledge,
        orderItems: {
            create: productIds.map((productId: string) => ({
              product: {
                connect: {
                  id: productId
                }
              }
            }))
          }
        
    }
    });
    console.log(order);

    return NextResponse.json(order);
}