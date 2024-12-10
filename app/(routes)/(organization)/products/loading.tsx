"use client";

import ProductCardSkeleton from "@/components/ui/product-card-skeleton";
import Heading from "@/components/userUI/Heading";
import { cn } from "@/lib/utils";

const ProductLoading = () => {
    const array = [
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
        {
        repeat : "1"
    },
]
    return ( 
        <div className="space-y-20">
            <Heading title="All Products" subtitle="Browse to your desired product!" />
            <section className="pb-4">
                <div className="">
                    <div className="flex mb-4">
                        <div className={cn("w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4")}>
                            {array.map((item, index) => (
                            <ProductCardSkeleton key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default ProductLoading;