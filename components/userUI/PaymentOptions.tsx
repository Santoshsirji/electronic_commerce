"use client";
import Image from "next/image";
import { BsBank } from "react-icons/bs";
import { GiCash } from "react-icons/gi";

const PaymentOptions = () => {
    return ( 
        <div
        className="
        flex
        flex-row
        items-center
        gap-1
        rounded-md
        p-2
        border
        space-x-3
        "
        >
            <div className="flex flex-col items-center justify-center">
              <Image src={'/esewa_logo.png'} width={100} height={100} alt="Esewa" className="rounded-full w-7 h-7" />
                <span className="tracking-tight text-[7px] font-semibold italic" >Esewa</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BsBank className="w-10 h-7"/>
                <span className="tracking-tight text-[7px] font-semibold italic">BANK TRANSFER</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <GiCash className="w-10 h-7" />
                <span className="tracking-tight text-[7px] font-semibold italic">CASH ON DELIVERY</span>
            </div>
        </div>
     );
}
 
export default PaymentOptions;