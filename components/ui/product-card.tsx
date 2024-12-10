"use client";

import Image  from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";


import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

import Currency from "./currency";
import { ProductWithRelations } from "@/types";


interface ProductCard {
    data: ProductWithRelations
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };


    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 w-full sm:w-auto">
            {/* Image & actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data.images?.[0]?.url}
                    alt=""
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500 hover:underline" >{data.category?.name}</p>
                <div className="flex space-x-2 items-center">
                <p>{data.color?.name}</p>
                <div className="p-3 w-max rounded-full border border-zinc-300" style={{backgroundColor: data.color?.value}}></div>
                </div>
            </div>
            <div className="flex items-center">
                <Currency value={data.price}/>
            </div>
        </div>
    );
}

export default ProductCard;