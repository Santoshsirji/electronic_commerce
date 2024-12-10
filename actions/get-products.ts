import { db } from "@/lib/db";
interface GetProductsParams {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

export default async function getProducts({ param }: { param: GetProductsParams }) {
  const { categoryId, sizeId, colorId, isFeatured } = param;

  try {
    const products = await db.product.findMany({
      where: {
        categoryId: categoryId || undefined,
        sizeId: sizeId || undefined,
        colorId: colorId || undefined,
        isFeatured: isFeatured !== undefined ? isFeatured : undefined,
        isArchived: false,
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