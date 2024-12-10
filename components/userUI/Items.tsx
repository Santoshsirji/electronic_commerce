"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavbarActions from "./navbar-actions";

const Items = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="
            flex
            items-center
            md:hidden
            "
            >
                <IoMdMenu onClick={() => setIsOpen(true)} size={24} className="cursor-pointer" />
            </div>
            <div
                className={`
            ${isOpen ? "flex flex-col translate-x-0" : " translate-x-full"}
            md:hidden
            fixed
            duration-200
            transition
            w-full
            h-full
            no-scrollbar
            bg-white
            inset-0
            p-4
            `}
            >
                <div
                    className="
                w-full
                p-2
                flex
                items-center
                space-x-5
                "
                >
                    <IoMdClose size={25} onClick={() => setIsOpen(false)} className="hover:opacity-80 cursor-pointer" />
                    <span className="text-lg font-semibold">Browse Page</span>
                </div>
                <hr />
                <div
                    onClick={() => setIsOpen(false)}
                    className="
                w-full
                px-10
                flex
                flex-col
                "
                >
                    <Link href={'/category'} className="cursor-pointer w-full px-1 py-4 border-y ">Browse Categories</Link>
                    <Link href={'/products'} className="cursor-pointer w-full px-1 py-4 border-y ">All products</Link>
                    <Link href={`/cart`} className="cursor-pointer w-full px-1 py-4 border-y flex items-center"> <span>Cart </span><NavbarActions /></Link>

                </div>
            </div>
            <div
                className="
            hidden
            md:flex
            flex-row
            items-center
            gap-2
            sm:gap-3
            md:gap-4
            lg:gap-6
            xl:gap-8
            "
            >
                <Link href={'/category'} className="cursor-pointer hover:opacity-80 w-max">Categories</Link>
                <Link href={'/products'} className="cursor-pointer hover:opacity-80 w-max">All products</Link>
                <Link href={`/cart`} className="cursor-pointer hover:opacity-80 w-max">My Cart</Link>
                <NavbarActions />
            </div>
        </>
    );
}

export default Items;