"use client";

import Image from "next/image";
import SecondaryImage from "./SecondaryImage";
import { useState } from "react";


interface ImageProps {
    primary: string;
    secondary: Object[]
}
const ImageView = ({primary, secondary}: ImageProps) => {

    const [primaryImage, setPrimaryImage] = useState(primary)
    
    const [secondaryImage, setSecondaryImage] = useState('/vercel.svg')

    const handleClick =  async () => {
        console.log(primaryImage)
         await setPrimaryImage("/vercel.svg")
    }
    return ( 
        <div
        className="
        flex
        flex-col
        gap-4
        "
        >
            <div className="">
                <Image src={primaryImage} width={1000} height={1000} alt="Product Image"/>
            </div>
            <div
            className="
            flex
            flex-wrap
            "
            >
                {/* <SecondaryImage onClick={handleClick} src={"/vercel.svg"} equal={primaryImage === secondaryImage}/> */}
            </div>
        </div>
     );
}
 
export default ImageView;