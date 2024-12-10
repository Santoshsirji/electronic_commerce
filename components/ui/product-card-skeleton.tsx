"use client";

const ProductCardSkeleton = () => {
    return ( 
        <div  className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 w-full sm:w-auto animate-pulse">
            <div className="aspect-square rounded-xl bg-gray-200 relative">
                <div
                className="
                bg-gray-200
                aspect-square
                w-full
                h-full
                "
                >
                    <div className="p-1 w-full h-full bg-transparent"></div>
                </div>
            </div>
            <div className="space-y-3">
                <p className="font-semibold text-lg py-2 bg-neutral-200 w-2/3"></p>
                <p className="py-[6px] w-2/4  h-2  bg-neutral-200" ></p>
                <div className="flex space-x-2 items-center">
                    <p className="p-2 w-2/5 bg-neutral-200"></p>
                    <div className="p-3 w-max rounded-full border bg-neutral-200 border-zinc-300"></div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-2/3 h-3 p-2 bg-neutral-200"></div>
            </div>
        </div>
     );
}
 
export default ProductCardSkeleton;