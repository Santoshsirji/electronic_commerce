import { db } from "@/lib/db";

export default async function getSizes() {

    const sizes = await db.size.findMany({
        where: {

        }
    })

    return sizes;
}