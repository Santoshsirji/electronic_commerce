"use client";

import Image from "next/image"
import Link from "next/link";

const Logo = () => {


    return (
        <Link href={'/'}>
            <Image
                src={"/sofapointnepal.png"}
                width={100}
                height={100}
                alt="Logo"
                className="
                h-14
                brightness-125
                saturate-150
                w-auto
                cursor-pointer
                "
            />
        </Link>
    )
}

export default Logo