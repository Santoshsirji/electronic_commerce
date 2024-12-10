"use client";

import Heading from "@/components/userUI/Heading";

const NoResults = () => {
    return ( 
        <div
        className="
        w-full
        "
        >
            <div
            className="
            text-sm
            sm:text-lg
            md:text-xl
            lg:text-2xl
            xl:text-3xl
            "
            >
                <Heading title="End of Results" subtitle="No results found in this category."/>
            </div>
        </div>
     );
}
 
export default NoResults;