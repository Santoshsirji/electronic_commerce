"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImagePlus, Plus, Trash } from "lucide-react";
import { Input } from "./input";

interface ImageArrayProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageArray: React.FC<ImageArrayProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result);
        setInputValue('');
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                        <div className="flex items-center justify-between ">
                            <span className="text-[0.5px] max-w-[70%]">{url}</span>
                            <Button variant={"destructive"} onClick={() => onRemove(url)}><Trash className="w-4 h-4"/></Button>
                        </div>
                    </div>
                ))}
            </div>
            <div
            className="
            flex
            items-center
            space-x-4
            "
            >
                <div className="flex flex-col space-y-1 flex-grow max-w-[450px]">
                    <div className="text-xs font-semibold text-rose-600"> <span>Provide Image Url only from facebook. </span><span className="text-black">eg. https://scontent.fktm21-1.fna.fbcdn.net/... </span> </div>
                <Input placeholder="Facebook Image Url" type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value) }/>
                </div>
                <Button variant={"outline"} type="button" onClick={() => onUpload(inputValue)}><Plus className="h-4 w-4"/></Button>
            </div>
        </div>
    );
}

export default ImageArray;