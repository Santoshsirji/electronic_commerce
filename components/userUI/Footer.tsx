"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Container from "@/components/Container";
import PaymentOptions from "@/components/userUI/PaymentOptions";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
    return (
        <div className="bg-zinc-950 pb-4 text-white">
            <Container>
                <div className="flex flex-col items-center jsutify-center w-full">



                <div
                className="
                w-full
                flex-col
                flex
                md:flex-row
                p-4
                "
                >
                    <div
                    className="
                    flex
                    flex-col
                    md:w-1/2
                    "
                    >
                        <div className="
                        flex
                        items-center space-x-1">
                            <MdEmail size={25} className="h-8 w-6"/>
                            <span className="font-semibold">info@sofapoint.com.np</span>
                        </div>
                        <div
                        className="
                        flex
                        items-center
                        space-x-1
                        "
                        >
                        <FaWhatsapp size={25} className="h-8 w-6"/>
                        <span className="font-semibold">+977 9862281653</span>
                        </div>
                        <div
                        className="
                        flex
                        items-center
                        space-x-1
                        "
                        >
                            <PhoneCall size={25} className="h-8 w-6"/>
                            <span className="font-semibold">+977 9120932323</span>
                        </div>
                        <div
                        className="
                        flex
                        items-center
                        space-x-1
                        "
                        >
                            <div
                            className="
                            flex
                            flex-col
                            py-10
                            "
                            >
                                <div
                                className="font-semibold text-sm md:text-lg"
                                >
                                    Follow Us:
                                </div>
                                <div
                                className="flex items-center space-x-3"
                                >
                                    <Link href={`${process.env.FACEBOOK}`}>

                                    <FaFacebook size={25} className="h-8 w-6 cursor-pointer text-blue-600 hover:opacity-80"/>
                                    </Link>
                                    <Link href={`${process.env.INSTAGRAM}`}>

                                    <FaInstagram size={25} className="h-8 w-6 cursor-pointer text-rose-600 hover:opacity-80"/>
                                    </Link>
                                    <Link href={`${process.env.TWITTER}`}>
                                    <BsTwitterX size={25} className="h-8 w-6 cursor-pointer hover:opacity-80"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                    className="
                    flex
                    flex-grow
                    justify-between
                    "
                    >
                        <div
                        className="
                        flex
                        flex-col
                        space-y-4
                        w-1/3
                        "
                        >
                            <div className="font-semibold text-sm md:text-lg">Company Info</div>
                            <div
                            className="
                            flex
                            flex-col
                            "
                            >
                                <Link href={'/'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Home</Link>
                                <Link href={'/products'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Products</Link>
                                <Link href={'/about'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">About Us</Link>
                                <Link href={'/location'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Location</Link>
                            </div>
                        </div>
                        <div
                        className="
                        flex
                        flex-col
                        space-y-4
                        w-1/3
                        "
                        >
                            <div className="font-semibold text-sm md:text-lg">Policies</div>
                            <div
                            className="
                            flex
                            
                            flex-col
                            "
                            >
                                <Link href={'/policy/privacy'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Privacy Policy</Link>
                                <Link href={'/policy/shipping'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Shipping</Link>
                                <Link href={'/policy/return'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Return Policy</Link>
                                <Link href={'/termsofuse'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Terms of Use</Link>
                            </div>
                        </div>
                        <div
                        className="
                        flex
                        flex-col
                        space-y-4
                        w-1/3
                        "
                        >
                            <div className="font-semibold text-sm md:text-lg">Need Help</div>
                            <div
                            className="
                            flex
                            flex-col
                            "
                            >
                                <Link href={'/contact'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs text-">Contact Us</Link>
                                <Link href={'/location'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Location</Link>
                                <Link href={'/'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Pricing</Link>
                                <Link href={'/'} className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Policies</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center flex items-center md:space-x-4"> 
                <div className="flex flex-col">
                    <Link href={'/settings'} className="text-xs md:font-normal md:text-base">A division of Sofa Point House Pvt.Ltd</Link>
                    <span className="text-xs font-semibold md:font-normal md:text-base">
                    &copy;Copyright  {new Date().getFullYear()}. All rights reserved.
                    </span>
                </div>
                    <div>
                        <PaymentOptions/>
                    </div>
                </div>
                </div>
            </Container>
        </div>
     );
}
 
export default Footer;