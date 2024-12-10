import { format } from "date-fns";

import { db } from "@/lib/db";
import { formatter } from "@/lib/utils";

import { OrderColumn } from "./components/columns"
import { OrderClient } from "./components/client";


export const revalidate = 0;
const OrdersPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const orders = await db.order.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    console.log(orders);
    const formattedOrders: OrderColumn[] = orders.map((item) => ({
        id: item.id,
        phone: item.phone,
        secondphone: item.secondphone,
        email: item.email,
        name: item.name,
        acknowledge: item.acknowledge,
        address: item.address,
        district: item.district,
        status: item.status,
        products: item.orderItems.map((orderItem) => orderItem.product.name).join(', '),
        totalPrice: formatter.format(item.orderItems.reduce((total, item) => {
            return total + Number(item.product.price)
        }, 0)),
        isPaid: item.isPaid,
        createdAt: format(item.createdAt, 'MMMM do, yyyy'),
        updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderClient data={formattedOrders} />
            </div>
        </div>
    );
};

export default OrdersPage;