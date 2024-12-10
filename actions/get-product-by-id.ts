import { db } from "@/lib/db";


export default async function getProductById({ params }: { params: { productId: string } }) {
  // Ensure productId is being correctly extracted from params
  const { productId } = params;

  // Fetch the product using the productId
  const product = await db.product.findUnique({
    where: {
      id: productId
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
