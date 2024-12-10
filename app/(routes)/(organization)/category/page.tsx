import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import { Heading } from "@/components/ui/Heading";
import fetchCategories from "@/actions/frontend/fetchCategories";

const CategoryPage = async () => {
    const categories = await fetchCategories();
    
    return ( 
        <div className="
        flex-col
        space-y-8
        ">
            <Heading
              title="Browse Categories"
              description="Below are the categories available at our store"
            />
            {categories.length === 0 ?
             <>            
            <Container>
                <Heading title="Sorry"
                 description="No categories available at the moment!"
                />
            </Container>
             </> : <>
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            
                            {
                                categories.map((category) => (
                                    <Link href={`/category/${category.id}`}
                                        key={category.id}
                                        className="
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
                                        <div className="relative h-16 w-16 rounded-md overflow-hidden sm:h-24 sm:w-24">
                                            <Image
                                                fill
                                                src={category.billboard.imageUrl}
                                                alt=""
                                                className="object-cover object-center"
                                            />
                                        </div>
                                        <div className="text-xl flex">
                                            <span className="">
                                            {category.name}
                                            </span>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </Container>
            </>}

        </div>
     );
}
 
export default CategoryPage;