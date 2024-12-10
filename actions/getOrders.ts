import { db } from "@/lib/db";

export default async function getOrders({params} : { params: { storeId: string;}}) {

    if(!params.storeId) {
        return [];
    };

    const orders = await db.order.findMany({
        where: {
            storeId: params.storeId
        },
        include: { orderItems : true },
        orderBy: { createdAt: 'desc' }
    })
    
    return orders;
}