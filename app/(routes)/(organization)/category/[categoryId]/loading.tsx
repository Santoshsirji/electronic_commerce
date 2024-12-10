"use client";
import Container from "@/components/Container";
import ProductCardSkeleton from "@/components/ui/product-card-skeleton";
import Skeleton from "@/components/ui/skeleton";

const IndividualCategoryLoadingSkeleton = () => {

    const products = [
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
    const data = [ 
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
        {
        repeat: "1",
    },
]
    return ( 
        <div className="bg-white">
            <Container>
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <div
                        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-neutral-200"
                        >
                        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                            <div className="font-bold text-transparent text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs ">
                                x
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <>
                            <div  className="flex items-center bg-none gap-x-2 rounded-full lg:hidden">
                                <Skeleton className="w-28 h-10 rounded-full">
                                    
                                </Skeleton>
                            </div>
                            
                        </>
                        <div className="hidden lg:block">
                            <Skeleton
                                className="w-32 h-12 rounded-full"
                            />
                            <div
                                className="mb-8"
                            >
                                <Skeleton className="text-lg font-semibold">
                                </Skeleton>
                                <Skeleton className="my-4" />
                                <div className="flex flex-col">
                                    <div className="flex flex-wrap gap-2">
                                        {data.map((filter, index) => (
                                            <div key={index} className="flex items-center">
                                                <Skeleton
                                                    className=
                                                        "rounded-md text-sm h-8 w-16 "
                                                >
                                                    
                                                </Skeleton>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {data.map((filter, index) => (
                                            <div key={index} className="flex items-center">
                                                <Skeleton
                                                    className=
                                                        "rounded-md text-sm h-8 w-16 "
                                                >
                                                    
                                                </Skeleton>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <div>No Results</div>}
                            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item, index) => (
                                    <ProductCardSkeleton
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default IndividualCategoryLoadingSkeleton;