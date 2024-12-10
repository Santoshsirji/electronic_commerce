"use client";

import { MessageSquareMoreIcon, X } from "lucide-react";
import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const MessageConnector = () => {
    const [expanded, setExpanded] = useState(false);

    return ( 
        <>
            <div className="fixed z-20 bottom-14 right-3">
                <div className="p-2 w-max fixed bottom-14 right-3  peer rounded-full bg-[#1900FF] cursor-pointer ">
                    {/* <MessageCircle className="w-8 h-8 text-white"/> */}
                    <MessageSquareMoreIcon onClick={() => setExpanded(true)} className={`${expanded ? "hidden rotate-90" : ""} duration-100 w-6 h-6 transition-transform text-white`}/>
                    <X onClick={() => setExpanded(false)} className={`${expanded ? " rotate-90" : " hidden rotate-180"} w-6 transition h-6 duration-300 text-white`}/>
                </div>
                <div
                className="relative text-xs font-semibold right-12 bottom-2 bg-zinc-500 px-2 rounded-sm hidden peer-hover:block transition-all duration-100 tracking-tight py-1 text-white"
                >
                    Contact Us
                </div>
            </div>
            <div
            className={`
            ${expanded ? "translate-y-0" : "translate-y-3 collapse "}
            duration-100
            fixed
            bottom-20
            z-10
            right-3
            bg-[#1900FF]
            flex
            flex-col
            items-center
            justify-center
            rounded-t-full
            pb-7
            `}
            >
                <div className={`${expanded ? ""  : ""} text-white flex flex-col items-center p-2 space-y-4`}>
                    <div className="bg-rose-600 rounded-full">
                        <FaFacebookMessenger className="w-6 peer h-6 cursor-pointer"/>
                   
                    </div>
                    <div className="bg-green-600 rounded-full">
                        <FaWhatsapp className="w-6 h-6 peer cursor-pointer"/>
                    </div>
                </div>
            </div>
    </>
     );
}
 
export default MessageConnector;