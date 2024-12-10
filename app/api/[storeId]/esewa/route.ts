import { db } from "@/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { productIds } = await req.json();

    if (!productIds || productIds.length === 0) {
      return new NextResponse("Product ids are required", { status: 400 });
    }

    const products = await db.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    });

    for (const product of products) {
      if (typeof product.price !== 'number') {
        console.error('Product price is not a number:', product.price);
        return new NextResponse("Invalid product price", { status: 400 });
      }

    //   const order = await db.order.create({
    //     data: {
    //       storeId: params.storeId,
    //       isPaid: false,
    //       orderItems: {
    //         create: productIds.map((productId: string) => ({
    //           product: {
    //             connect: {
    //               id: productId
    //             }
    //           }
    //         }))
    //       }
    //     }
    //   });

      // Dynamic payload
      const payload = {
            "amount": calculateTotalPrice(products),
            "failure_url": `${process.env.PAYMENT_FAILED_PAGE}`,
            "product_delivery_charge": "0",
            "product_service_charge": "0",
            "product_code": "EPAYTEST",
            "signature": "YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=",
            "signed_field_names": "total_amount,transaction_uuid,product_code",
            "success_url": `${process.env.PAYMENT_SUCCESS_PAGE}`,
            "tax_amount": "10",
            "total_amount": "110",
            "transaction_uuid": "ab14a2f2b02c3"
            }

      console.log(payload)
      const esewaResponse = await axios.post('https://rc-epay.esewa.com.np/api/epay/main/v2/form', payload
      );

      console.log(esewaResponse.data)
      if (esewaResponse) {
        return NextResponse.json({
          success: true,
        //   data: khaltiResponse.data
        });
      } else {
        return NextResponse.error();
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

function calculateTotalPrice(products: any[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

function generateOrderId(): string {
  // Generate your unique order ID logic here
  return "test12";
}
