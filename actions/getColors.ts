import { db } from "@/lib/db";

export default async function getColors() {

    const colors = await db.color.findMany({
        where: {

        }
    })

    return colors;
}