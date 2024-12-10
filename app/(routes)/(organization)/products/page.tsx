import ProductCard from '@/components/ui/product-card';
import { cn } from '@/lib/utils';
import Heading from '@/components/userUI/Heading';
import getProducts from '@/actions/get-products';
import ProductCardSkeleton from '@/components/ui/product-card-skeleton';



const ProductPage = async ({ params }: any) => {

    const products = await getProducts({ param : params});

    return (
        <div className="space-y-20">
            <Heading title="All Products" subtitle="Browse to your desired product!" />
            <section className="pb-4">
                <div className="">
                    <div className="flex mb-4">
                        <div className={cn("w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4")}>
                            {products.map((product) => (
                                <div key={product.id} className="">
                                    <ProductCard data={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;
