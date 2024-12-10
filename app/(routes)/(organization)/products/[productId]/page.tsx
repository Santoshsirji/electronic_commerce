import getProductById from "@/actions/get-product-by-id";
import getProducts from "@/actions/frontend/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import axios from "axios";

import React from "react"
import getProduct from "@/actions/frontend/get-product";

interface ProductPageProps {
    params: {
        productId: string;
    }
}


const ProducPage: React.FC<ProductPageProps> = async ({
    params
}) => {

  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  })

  return (
    <div className="bg-white pt-1">
      <Container>
        <div className="">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Gallery  */}
                <Gallery images={product.images}/>
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <Info data={product}/>
                </div>
            </div>
            <hr className="my-10" />
            <ProductList title="Related Items" items={suggestedProducts}/>
        </div>
      </Container>
    </div>
  )
}

export default ProducPage
