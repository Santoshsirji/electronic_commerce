"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [zoom, setZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const zoomRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (zoomRef.current) {
            const { left, top, width, height } = zoomRef.current.getBoundingClientRect();
            const x = e.pageX - left;
            const y = e.pageY - top;

            const constrainedX = Math.max(0, Math.min(x, width));
            const constrainedY = Math.max(0, Math.min(y, height));

            setZoomPosition({
                x: (constrainedX / width) * 100,
                y: (constrainedY / height) * 100
            });
        }
    };

    const handleMouseEnter = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6  w-full max-w-2xl  lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="flex">
                            <div
                                className=" aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={zoomRef}
                                style={{ position: 'relative' }}
                            >
                                <Image
                                    fill
                                    src={image.url}
                                    alt="Image"
                                    className="object-cover object-center  cursor-pointer"
                                />
                                {zoom && (
                                    <div
                                        className="absolute hidden lg:block pointer-events-none border border-gray-300"
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            top: `${zoomPosition.y}%`,
                                            left: `${zoomPosition.x}%`,
                                            transform: 'translate(-50%, -50%)',
                                            background: "rgba(255, 255, 255, 0.5)"
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                            {zoom && (
                                <div
                                    className="ml-4 w-80 h-80 border fixed top-20 left-[50vw] hidden lg:block border-gray-300"
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                        backgroundSize: `${(zoomRef.current?.offsetWidth ?? 0) * 2}px ${(zoomRef.current?.offsetHeight ?? 0) * 2}px`,
                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                        backgroundRepeat: "no-repeat"
                                    }}
                                />
                            )}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;
