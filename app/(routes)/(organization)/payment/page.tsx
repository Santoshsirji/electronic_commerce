"use client";

import { Heading } from "@/components/ui/Heading";
import Image from "next/image";
import axios from "axios";
const PaymentPage = () => {

    let data = {
        "return_url": "http://localhost:3000/payment/success",
        "website_url": "http://localhost:3000/",
        "amount": 1300,
        "purchase_order_id": "test12",
        "purchase_order_name": "test",
        "customer_info": {
            "name": "Khalti Bahadur",
            "email": "example@gmail.com",
            "phone": "9800000123"
        },
        "amount_breakdown": [
            {
                "label": "Mark Price",
                "amount": 1000
            },
            {
                "label": "VAT",
                "amount": 300
            }
        ],
        "product_details": [
            {
                "identity": "1234567890",
                "name": "Khalti logo",
                "total_price": 1300,
                "quantity": 1,
                "unit_price": 1300
            }
        ],
        "merchant_username": "merchant_name",
        "merchant_extra": "merchant_extra"
    }
    const handleKhalti = async () => {
        console.log("khalti clicked");
        
    }
    return ( 
        <div
        className="
        bg-white
        flex
        flex-col
        justify-center
        space-y-10
        "
        >

            <Heading title="Payment Options" description="Please select your prefered payment method."/>
            <hr />
            <div
            className="
            flex
            flex-col
            justify-center
            items-center
            space-y-5
            "
            >
                <div onClick={handleKhalti} className="flex items-center cursor-pointer hover:opacity-80 gap-2 border border-zinc-200 rounded-md w-[300px] md:w-[600px] lg:w-[700px]">
                    <Image width={200} height={200} src={'/khalti_logo.png'} alt="Khalti Logo" className="h-16 w-16 sm:h-20 sm:w-20 md:w-32 md:h-32 lg:w-40 lg:h-40"/>
                    <span className="text-2xl w-full text-center md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Khalti</span>
                </div>
                <div className="flex items-center cursor-pointer hover:opacity-80 gap-2 border border-zinc-200 rounded-md w-[300px] md:w-[600px] lg:w-[700px]">
                    <Image width={200} height={200} src={'/esewa_logo.png'} alt="Khalti Logo" className="h-16 w-16 sm:h-20 sm:w-20 md:w-32 md:h-32 lg:w-40 lg:h-40"/>
                    <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold w-full text-center">E-sewa</span>
                </div>
                <div className="flex items-center cursor-pointer hover:opacity-80 gap-2 border border-zinc-200 rounded-md w-[300px] md:w-[600px] lg:w-[700px]">
                    <Image width={200} height={200} src={'/fonepay_logo.png'} alt="Khalti Logo" className="h-16 w-16 sm:h-20 sm:w-20 md:w-32 md:h-32 lg:w-40 lg:h-40"/>
                    <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold  w-full text-center">Fonepay</span>
                </div>
            </div>
            <hr />
        </div>
     );
}
 
export default PaymentPage;