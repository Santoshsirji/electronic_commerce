import { NextResponse } from 'next/server';

import { db }from '@/lib/db';
import getCurrentUser from '@/actions/getCurrentUser';
 
export async function POST(
  req: Request,
  { params }: { params: { storeId: string, orderId: string } }
) {
  try {
    const user = await getCurrentUser();
    console.log(params);

    const body = await req.json();
    const { status, isPaid } = body;

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.orderId) {
      return new NextResponse("OrderId is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId: user.id
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }


    const order = db.order.findMany({
      where: {
        id: params.orderId
      }
    });

    if(!order || order === null ) {
      return new NextResponse("No such order found in database", { status: 406})
    }
  
    const updatedOrder = await db.order.update({
      where: {
        id: params.orderId
      },
      data: {
        status,
        isPaid
      }
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.log('[ORDERS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};



export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; orderId: string } }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.orderId) {
      return new NextResponse("Order ID is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId: user.id
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const order = await db.order.findUnique({
      where: {
        id: params.orderId
      }
    });

    if (!order) {
      return new NextResponse("No such order found in the database", { status: 406 });
    }

    await db.order.delete({
      where: {
        id: params.orderId
      }
    });

    return new NextResponse("Order deleted successfully", { status: 200 });
  } catch (error) {
    console.log('[ORDERS_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

