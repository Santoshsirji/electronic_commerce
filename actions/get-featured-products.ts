import { db } from "@/lib/db";
export default async function getFeaturedProducts() {
  try {
    const products = await db.product.findMany({
      where: {
        isFeatured: true
      },
      include: {
        images: true,
        color: true,
        size: true,
        category: {
          include: {
            billboard: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10
    });

    // Convert price to string
    const formattedProducts = products.map(product => ({
      ...product,
      price: product.price.toString()
    }));

    return formattedProducts.length ? formattedProducts : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}