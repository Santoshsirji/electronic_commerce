"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LocationPage from "@/components/userUI/Location";
import { PhoneCall } from "lucide-react";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaViber, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactUsPage = () => {
    return ( 
        <div className="">
            <Card className="bg-neutral-50 space-y-10">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Following are the ways to reach out to us. Please feel free to reach out through your most convinient way.</CardDescription>
                </CardHeader>
                <Separator/>
                <CardContent>

                    <div
                    className="
                    flex
                    flex-col
                    "
                    >
                        <div className="flex items-center gap-2">
                            <MdMail className="w-8 h-8 cursor-pointer hover:opacity-80"/>
                            <div className="text-lg"> <span className="font-semibold">Email Us:</span> <span className="font-bold text-xl">info@sofapoint.com.np</span></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-8 h-8 cursor-pointer hover:opacity-80"/>
                            <div> <span className="font-semibold">Call Us: </span><span className="font-bold text-xl">991232881</span></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsWhatsapp className="w-8 h-8 cursor-pointer hover:opacity-80"/>
                            <div> <span className="font-semibold">Whatsapp:</span><span className="font-bold text-xl">128398123</span></div>
                        </div>
                        <Separator className="my-5"/>
                        <h2 className="text-2xl font-semibold underline">
                           1. Our Social Media Handles
                        </h2>
                        <div className="flex flex-col space-y-3">
                            <p>Follow US at:</p>
                            <div className="flex items-center gap-4">
                            <FaFacebook className="w-8 h-8 text-blue-600 cursor-pointer hover:opacity-80"/>
                            <FaInstagram className="w-8 h-8 text-rose-600 cursor-pointer hover:opacity-80"/>
                            <BsTwitterX className="w-8 h-8 cursor-pointer hover:opacity-80"/>
                                <FaYoutube className="w-8 h-8 text-[#FF0000] cursor-pointer hover:opacity-80"/>
                            </div>
                        </div>
                        <Separator className="my-5"/>
                        <h2 className="text-2xl font-semibold underline">2. Message Us Directly</h2>
                        <div
                        className="
                        flex
                        flex-col
                        "
                        >
                                <p>You can message us directly via:</p>
                                <div className="flex gap-4">
                                    <div className="">
                                <FaFacebookMessenger className="w-8 h-8 text-sky-700 from-[#0695FF] via-[#A334FA] to-[#FF6968] cursor-pointer hover:opacity-80"/>
                                    </div>
                                    <FaWhatsapp className="w-8 h-8 text-green-600 cursor-pointer hover:opacity-80"/>
                                    <FaViber className="w-8 h-8 text-purple-700 cursor-pointer hover:opacity-80"/>
                                </div>
                        </div>
                    </div>
                </CardContent>
                <Separator/>
                <CardFooter>
                    <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl underline">3. Visit Our Office Directly</h2>
                    <LocationPage/>
                    </div>
                </CardFooter>
            </Card>
        </div>
     );
}
 
export default ContactUsPage;