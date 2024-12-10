import React from "react";

import getCategory from "@/actions/frontend/get-category";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";

interface CategoryProps {
    params: {
        categoryId: string;
      },
      searchParams: {
      colorId?: string;
      sizeId?: string;
    }
}
const CategoryPage: React.FC<CategoryProps> = async ({
    params,
    searchParams
}) => {

  const param = {...params, ...searchParams}
  const products = await getProducts({param});

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);


  return (
    <div className="bg-white z-0">
      <Container>
        <Billboard
        data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors}/>
              <div className="hidden lg:block">
                <Filter
                  valueKey="sizeId"
                  name="Sizes"
                  data={sizes}
                />
                <Filter
                  valueKey="colorId"
                  name="Colors"
                  data={colors}
                />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && <div>No Results</div>}
                <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item) => (
                    <ProductCard
                      key={item.id}
                      data={item}
                    />
                  ))}
                </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
