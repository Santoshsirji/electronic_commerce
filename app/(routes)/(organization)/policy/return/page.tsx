"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReturnPolicy = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Refund and Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8 px-2 md:px-0">
<h2 className="text-xl font-semibold mb-2 underline">Refund Policy</h2>
                        <p className="mb-4">
                            At Codeswear, a brand owned by CWH Solutions, our primary focus is customer satisfaction, which is why we strive to provide the best products and services. Please note that product images on our website are for representational purposes only and may vary slightly due to lighting conditions or other factors.
                        </p>
                        <p className="mb-4">
                            If you are unsatisfied with a product due to a major defect, we will review your case and provide a refund. The following conditions apply to our refund policy:
                        </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Items can only be returned within a 7-day window from the date of delivery.</li>
                            <li>To initiate a return request, customers can visit <a href="https://codeswear.com/return" className="text-blue-500">codeswear.com/return</a>.</li>
                            <li>A valid reason is required for returning an item.</li>
                            <li>Repeatedly returning items as an abuse of our return policy may result in declined return requests.</li>
                            <li>Customers cannot apply for a full refund if the item is part of a &quot;Deal of the Day&quot; offer.</li>
                            <li>In some cases where there is a slight mismatch between the product pictures and the actual product, return requests related to such mismatches may be rejected.</li>
                            <li>In rare cases where return pickup is not available with our courier partner, the customer is responsible for sending the product back to us for refund or replacement processing.</li>
                        </ul>
<h2 className="text-xl font-semibold mb-2 underline">Cancellation Policy</h2>
                        <p className="mb-4">
                            To cancel your order, please contact us using the provided contact link. Orders can be canceled until they are shipped from our warehouse. Requests received more than 7 business days prior to the product delivery date will not be processed.
                        </p>
                        <p className="mb-4">
                            If you have any questions or concerns regarding our Refund and Cancellation Policy, please contact us at:
                        </p>
                        <p className="mb-4">
                            Call/Whatsapp: +91 707 807 3838<br />
                            Email: care@codeswear.in<br />
                            Support Hours: 10 AM - 6 PM
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ReturnPolicy;
