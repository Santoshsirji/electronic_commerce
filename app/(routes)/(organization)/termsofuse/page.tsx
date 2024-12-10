"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TermsOfUse = () => {
    return ( 
        <div>
            <Card>
                <CardHeader>
                   
                    <CardDescription>
                        <div>

                        Your use of this Web site ( https://examplestore.com) means you agree to the following terms of use (the &quot;Terms of Use&quot;). If you do not agree with these terms you should leave this Web site (the &quot;Site&quot;) immediately, not use the files herein, and/or not subscribe to this service.
                        </div>
                        <div>

                        PLEASE READ THESE TERMS AND CONDITIONS OF USE (HEREINAFTER REFERRED TO AS &quot;TOU&quot;) CAREFULLY. THIS AGREEMENT GOVERNS YOUR USE OFhttps://examplestore.com (HEREINAFTER REFERRED TO AS &quot;WEBSITE&quot;). YOUR USE OF THIS WEB SITE ( https://examplestore.com) MEANS YOU AGREE TO THE FOLLOWING TERMS OF CONDITIONS OF USE (THE &quot;TERMS OF USE&quot;) DESCRIBED HEREIN AND BY ALL TERMS, POLICIES AND GUIDELINES INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OR ANY OF THESE TERMS AND CONDITIONS, DO NOT USE THIS WEBSITE, LEAVE THIS WEBSITE IMMEDIATELY, NOT USE THE FILES HEREIN, AND/OR NOT SUBSCRIBE TO THIS SERVICE.
                        </div>
                        <div>


                        By using this website, you represent and warrant that you are over the age of 18 and are lawfully able to accept these Website terms of conditions of use. If you are using the Website on behalf of any entity, you further represent and warrant that you are authorized to accept these Website terms and conditions on such entity&quot;s behalf, and that such entity agrees to indemnify MASH for violations of these Website terms and conditions.
                        </div>
                        <div>
                        MASH may revise and update these TOU at anytime and without notice. Your continued access or use of this website after any such changes are posted will constitute your acceptance of these changes and you would be bound by the amended TOU.
                        </div>
                        </CardDescription>
                </CardHeader>
                <Separator/>
                <CardContent className="space-y-5">
                    <h2 className="text-lg font-semibold underline">1. OWNERSHIP OF THE SITE AND ITS CONTENT</h2>
                    <p>All intellectual property rights, including but not limited to trademarks, logos, and designs, displayed on the Website are the property of Codeswear, a brand owned by CWH Solutions. You are prohibited from using, copying, or distributing any content from the Website without our prior written consent.</p>
                    <Separator />
                    <h2 className="text-lg font-semibold underline">2. Product Information</h2>
                    <div className="space-y-2">
                        We make every effort to provide accurate and up-to-date information about our products on the Website. However, we do not guarantee the accuracy, completeness, or reliability of any product information. You acknowledge that the actual colors, dimensions, and specifications of products may differ from the images and descriptions displayed on the Website.
                    </div>
                    <Separator />
                    <h2 className="text-lg font-semibold underline">
                        3. Order Acceptance and Pricing
                    </h2>
                    <div>
                        <p>All orders placed through the Website are subject to our acceptance. We reserve the right to refuse or cancel any order at any time for any reason. In the event of a pricing error on the Website, we may refuse or cancel any such orders, even if the order has been confirmed and payment has been made. We will notify you of any changes or cancellations related to your order.</p>
                    </div>
                    <Separator />
                    <h2 className="text-lg font-semibold underline">
                        4. Limitation of Liability
                    </h2>
                    <div>
                        <p>To the extent permitted by applicable law, Codeswear, a brand owned by CWH Solutions shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages, including but not limited to loss of profits, data, or business opportunities arising out of your use of the Website or any products purchased from us.</p>
                    </div>
                    <Separator />
                    <h2 className="text-lg font-semibold underline">
                       5. Governing Law
                    </h2>
                    <div>
                        <p>These Terms shall be governed by and construed in accordance with the laws of Uttar Pradesh, India. Any legal action or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts located in Uttar Pradesh, India.</p>
                    </div>
                    <Separator />
                    <h2 className="text-lg font-semibold underline">
                       6. Changes to the Terms and Conditions
                    </h2>
                    <div>
                        <p>We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after the posting of changes constitutes your acceptance of the revised Terms.</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <p>This is the footer area</p>
                </CardFooter>
            </Card>
        </div>
     );
}
 
export default TermsOfUse;