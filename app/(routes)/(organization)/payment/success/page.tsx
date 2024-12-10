"use client";
import { Heading } from "@/components/ui/Heading";
import { useSearchParams } from "next/navigation";
import { IoMdHappy } from "react-icons/io";

// interface QueryParams {
//     pidx: string;
//     status: string;
// }
const PaymentSuccessPage = ({params}:
     {params: {pidx: string,
     transaction_id: string,
     amount: number,
     total_amount: number,
     mobile: number,
     status: string,
     purchase_order_id: string,
     purchase_order_name: string
    }}) => {
   
    // const params1 = useSearchParams();
    // const {
    //     pidx,
    //     status
    // }: QueryParams = params1

    return ( 
        <div
        className="
        min-h-[80vh]
        flex
        flex-col
        items-center
        justify-center
        "
        >
            {/* { && (
                <div className="p-10 bg-green-200 rounded-full flex items-center gap-2">
                    <IoMdHappy size={100} className="text-green-500" />
                    <Heading title="Payment Successful" description="Hurrah! Your payment was successful. You can now continue shopping." />
                </div>
            )}
             */}
            <div className="p-10 bg-green-200 rounded-full flex items-center gap-2">
          <IoMdHappy size={100} className="text-green-500"/>
          <Heading title="Payment Successful" description="Hurrah! Your payment was successful. You can now continue shopping."/>
            </div>
            <div className="p-10 bg-green-200 rounded-full flex items-center gap-2">
          <IoMdHappy size={100} className="text-green-500"/>
          <Heading title="Payment Successful" description="Hurrah! Your payment was successful. You can now continue shopping."/>
            </div>
        </div>
     );
}
 
export default PaymentSuccessPage;