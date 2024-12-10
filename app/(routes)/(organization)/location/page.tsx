"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/Heading";


const LocationPage = () => {
    return ( 
        <div className="lg:flex pt-12 space-y-8 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Our Location
                    </CardTitle>
                    <CardDescription>
                        Hello, We are located here at xxx. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque maxime excepturi voluptates mollitia at natus velit corrupti recusandae, molestiae placeat ullam ipsum repellat repellendus quas! Unde quis voluptatibus rerum ut quam, ullam possimus molestiae dolore voluptas beatae illo assumenda.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2544190067733!2d85.32405447614113!3d27.709429925398325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19091da0e19b%3A0xc4598923d9d99381!2sCity%20Centre!5e0!3m2!1sen!2snp!4v1716075353626!5m2!1sen!2snp" width="600" height="450" style={{border:0}} className="w-full h-[70vh] lg:h-[55vh]" allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default LocationPage;