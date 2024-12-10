import { db } from "@/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { productIds } = await req.json() as { productIds: string[] };

    if (!productIds || productIds.length === 0) {
      return new NextResponse("Product ids are required", { status: 400 });
    }

    const products = await db.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (products.length === 0) {
      return new NextResponse("No products found", { status: 404 });
    }

    for (const product of products) {
      if (typeof product.price !== 'number') {
        console.error('Product price is not a number:', product.price);
        return new NextResponse("Invalid product price", { status: 400 });
      }

      // const order = await db.order.create({
      //   data: {
      //     storeId: params.storeId,
      //     isPaid: false,
      //     orderItems: {
      //       create: productIds.map((productId: string) => ({
      //         product: {
      //           connect: {
      //             id: productId,
      //           },
      //         },
      //       })),
      //     },
      //   },
      // });

      // Dynamic payload
      const payload = {
        return_url: `${process.env.PAYMENT_SUCCESS_PAGE}`,
        website_url: `${process.env.WEBSITE_URL}`,
        amount: calculateTotalPrice(products),
        purchase_order_id: 12,
        purchase_order_name: "Test",
      };

      console.log(payload);
      const khaltiResponse = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        payload,
        {
          headers: {
            Authorization: `Key ${process.env.LIVE_SECRET_KEY}`,
          },
        }
      );

      console.log(khaltiResponse.data);
      if (khaltiResponse.data) {
        return NextResponse.json({
          success: true,
          data: khaltiResponse.data,
        });
      } else {
        return new NextResponse("Payment initiation failed", { status: 500 });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

function calculateTotalPrice(products: { price: number }[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

function generateOrderId(): string {
  // Generate your unique order ID logic here
  return "test12";
}
