import { db } from "@/lib/db";

export default async function getSuggestedProducts ({categoryId}: {categoryId: string}){
const products = await db.product.findMany({
    where: {
        categoryId
    },
      include: {
        images: true,
        category: true,
        color: true,
        size: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    if(!products) {
        return [];
    }
  
    return products
}

