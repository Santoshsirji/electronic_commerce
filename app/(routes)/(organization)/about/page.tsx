"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
    return ( 
        <div className="">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">About Us</CardTitle>
                    <CardDescription>Thanks for visiting to know us better!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    <h2 className="text-lg font-semibold">Our Philosophy</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aspernatur, enim temporibus impedit, porro exercitationem eveniet veritatis omnis officia nemo harum voluptate! Quas voluptatum molestiae, molestias illum repudiandae neque eos eveniet quisquam blanditiis odio voluptatibus maxime, ipsum animi quod sed harum enim. Enim impedit doloremque similique quae dolorem beatae delectus.</p>
                    <Separator />
                    <h2 className="text-lg font-semibold">People Behind The Site</h2>
                    <div className="space-y-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla labore obcaecati ducimus natus neque, maxime veniam consectetur blanditiis nesciunt eos eligendi vero hic officiis, dolorum amet animi nisi repudiandae aperiam odio dignissimos repellat in temporibus atque? Officiis id commodi, error facilis rem nobis. Ex?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab eaque officiis reiciendis numquam iusto quae saepe pariatur expedita. Maiores at esse voluptatem tenetur tempore neque officia, cum aut incidunt nulla vel?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam fugit blanditiis, quibusdam aliquid assumenda quam tenetur, et necessitatibus, delectus iure quia non quos iste. Reprehenderit sed adipisci magni hic!</p>
                    </div>
                    <Separator/>
                    <h2 className="text-lg font-semibold">
                        Our Story
                    </h2>
                    <div>
                        <p>This is our story Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus nostrum soluta aliquid harum ab quaerat commodi. Exercitationem nesciunt dolores eligendi sunt dolorum! Eaque, itaque? Ipsa, cum enim pariatur est repudiandae vero vitae quos, minima hic impedit maiores voluptatibus, consequatur facilis necessitatibus inventore. Maxime eius veritatis error consequatur optio eveniet veniam dicta, nulla facere similique tempore et. Veniam esse enim quidem.</p>
                    </div>
                    <Separator />
                    <h2 className="text-lg font-semibold">
                        Our Mission
                    </h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia vero magnam, quos dolorum voluptate amet! Nam tenetur voluptate nemo cum nobis non obcaecati, id est eos neque eum excepturi nihil nulla aperiam totam?</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <p>This is the footer area</p>
                </CardFooter>
            </Card>
        </div>
     );
}
 
export default AboutPage;