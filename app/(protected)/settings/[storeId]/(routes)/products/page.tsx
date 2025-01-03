import { format } from "date-fns";

import { db } from "@/lib/db";
import { formatter } from "@/lib/utils";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

export const revalidate = 0;

const ProductsPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const products = await db.product.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            category: true,
            size: true,
            color: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    const formattedProducts: ProductColumn[] = products.map((item) => ({
        id: item.id,
        name: item.name,
        isFeatured: item.isFeatured,
        isArchived: item.isArchived,
        price: typeof item.price === 'number' ? formatter.format(item.price) : item.price,
        category: item.category.name,
        size: item.size.name,
        color: item.color.value,
        createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductsClient data={formattedProducts} />
            </div>
        </div>
    );
};

export default ProductsPage;