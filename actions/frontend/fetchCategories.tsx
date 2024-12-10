import { db } from "@/lib/db";

export default async function fetchCategories () {

    const categories = await db.category.findMany({
        where: {

        },
        include: {
            billboard: true
        }
    });

    if(!categories) {
        return [];
    }

    return categories;
}