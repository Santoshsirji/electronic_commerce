"use client";

import Container from "@/components/Container";
import Heading from "@/components/userUI/Heading";

const ComponentsLoading = () => {
    const categories = [
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
        {
        repeat: "1"
    },
]
    return ( 
        <div className="
        flex-col
        space-y-8
        ">
            <Heading
                title="Browse Categories"
                subtitle="Below are the categories available at our store"
            />
            {categories.length === 0 ?
                <>
                    <Container>
                        <Heading title="Sorry"
                            subtitle="No categories available at the moment!"
                        />
                    </Container>
                </> : <>
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {
                                categories.map((category, index) => (
                                    <div
                                    key={index}
                                        className="
                                        animate-pulse
                                    bg-neutral-100
                                    w-full
                                    px-1
                                    py-1
                                    border-b
                                    rounded-md
                                    flex
                                    items-center
                                    cursor-pointer
                                    hover:bg-slate-50
                                    duration-10
                                    gap-2
                                    md:gap-4
                                    xl:gap-5
                                    "
                                    >
                                        <div className="relative h-16 w-16 rounded-md overflow-hidden sm:h-24 sm:w-24 bg-neutral-200">
                                            <div
                                                className="object-cover object-center w-full h-full bg-neutral-200"
                                            />
                                        </div>
                                        <div className="text-xl w-full bg-neutral-100">
                                            <div className="w-1/2 py-3 bg-neutral-200 h-1">
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                </>}

        </div>
     );
}
 
export default ComponentsLoading;