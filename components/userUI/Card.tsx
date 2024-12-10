"use client";

import React from 'react';
import { FaHeart, FaShoppingCart, FaShareAlt, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
    id: string;
    storeId: string;
    categoryId: string;
    name: string;
    price: number;
    isFeatured: boolean;
    isArchived: boolean;
    sizeId: string;
    colorId: string;
    image: string;
    }

const ProductCard: React.FC<ProductProps> = ({
    id,
    storeId,
    categoryId,
    name,
    price,
    isFeatured,
    isArchived,
    sizeId,
    colorId,
    image
 }) => {
    return (
        <Link href={`/products/${id}`} className='w-full sm:w-max   rounded-md hover:shadow-md' >
            <div
                className="
            cursor-pointer
            group
            w-full
            sm:w-72
            overflow-hidden
            "
            >


            <div
                className="
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-xl
                "
            >
                <Image
                    fill
                    alt="Vacancy"
                    src={image}
                    className="
                    object-cover
                    h-full
                    w-full
                    group-hover:scale-100
                    transition
                    saturate-150
                    brightness-[1.075]
                    "
                />
                <div className="absolute top-3 right-3">
                    <FaHeart
                        size={25}
                    />
                </div>

            </div>
            <div className="px-1 py-2 flex flex-col">
                    <div className="px-2 py-1 flex items-center bg-blue-100 rounded-full w-max"> <span>4.5 </span><FaStar className="text-sky-500"/><span> 500</span></div>
                <div className=" text-lg">
                    {name}
                </div>
                <div className="font-light text-sm">
                    Medium | Blue White
                </div>
                <div className="font-bold text-xl">
                    Rs. {price}
                </div>
                <div className="bg-yellow-100 p-3 rounded-b-2xl">Get Rs.400 off COUPON: Single</div>
            </div>
            </div>
        </Link>
    );
}

export default ProductCard;
