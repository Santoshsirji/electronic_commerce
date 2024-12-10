"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Button from "@/components/userUI/Button";

interface SummaryProps {
    CreateOrder?: boolean;
}

const Summary: React.FC<SummaryProps> = ({CreateOrder}) => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.");
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);

    const onCheckout = async () => {
        router.push('/checkout')
        // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/esewa`, {
        //     productIds: items.map((item) => item.id)
        // });

        // console.log(response);
        // if(response.status === 200) {
        //     window.location = response.data.data.payment_url;
        // }
        // else {
        //     console.log("Something went wrong!")
        // }

    }

    return (
        <div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Order total</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            {CreateOrder ? <>
             
            </> : <> 
            <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
                Checkout
            </Button> 
            </> }
            
        </div>
    );
}

export default Summary;