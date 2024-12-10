import { db } from "@/lib/db";


export default async function getProductByCategoryId({ params }: { params: { categoryId: string } }) {
  // Ensure productId is being correctly extracted from params
  const { categoryId } = params;

  // Fetch the product using the productId
  const product = await db.product.findUnique({
    where: {
      id: categoryId
    },
    include: {
      images: true,
      category: true,
      color: true,
      size: true,
    }
  });

  // Check if the product was found
  if (!product) {
    return [];  
  }

  return product;
}
