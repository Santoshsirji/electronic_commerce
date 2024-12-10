
import { Poppins } from "next/font/google";
import { Nunito } from "next/font/google";

import Link from "next/link";

import Hero from "@/components/userUI/Hero";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ui/product-card";
import getProducts from "@/actions/get-products";
import LocationPage from "@/components/userUI/Location";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import SecondHero from "@/components/userUI/SecondHero";
import React from "react";
import getFeaturedProducts from "@/actions/get-featured-products";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400"],

})

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["600"]
})

const SofaPage = async ({params}: any) => {

    const products = await getFeaturedProducts();

    return (
        <main className="space-y-20" >
                <Hero />
                <Container>
                    <section className="pt-6 pb-4 ">
                        <div className="sm:px-4">
                            <div className="flex flex-wrap  mb-4">
                                <div className="w-full text-center">
                                    <div className={font.className}>
                                        <h3 className="mb-5 text-xl" >Featured Products</h3>
                                    </div>
                                </div>

                                <div className={cn("w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8",nunito.className)}>
                                    {products.map((product, index) => (
                                        <ProductCard data={product} key={index} />
                                    ))}
                                </div>

                                <div className="w-full mt-5 text-center">
                                <Button className="bg-[#121212] rounded-full px-3 py-1">
                                        <Link href={'/products'}>View All</Link>
                                </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <div className="lg:px-10">
                <SecondHero/>
            </div>
            <div className="w-full bg-slate-200">
            <Container>
                <LocationPage/>
            </Container>
            </div>
        </main>
    );
}

export default SofaPage;