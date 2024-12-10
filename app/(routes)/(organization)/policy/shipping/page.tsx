"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingPolicy = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Shipping Policy</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="container mx-auto py-8 px-2 md:px-0">
                        <p className="mb-4">
                            Thank you for shopping at Codeswear, a brand owned by CWH Solutions. Here at Codeswear, we strive to provide you with the best shopping experience possible. Below, you&apos;ll find details about our shipping policy:
                        </p>
                        <div>
                            <h2 className="text-xl font-semibold mb-2 underline">Shipping Time</h2>
                            <p className="mb-6">
                                We understand the excitement of receiving your order promptly. Therefore, we aim to process the order within 1-2 days and deliver all the orders within 7 days of purchase. Please note that this timeframe may vary depending on product availability and any unforeseen circumstances. Rest assured, we&apos;re committed to getting your items to you as swiftly as possible.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">Shipping Method</h2>
                            <p className="mb-6">
                                Orders are shipped via trusted courier services to ensure safe and timely delivery to your doorstep. Once your order has been dispatched, you will receive a confirmation email containing tracking information, allowing you to monitor the status of your delivery.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">Shipping Charges</h2>
                            <p className="mb-6">
                                Codeswear offers free shipping on all orders within the specified regions. Any additional shipping charges, such as expedited shipping or international delivery fees, will be clearly communicated to you during the checkout process.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">International Shipping</h2>
                            <p className="mb-6">
                                While we primarily serve customers within our designated regions, international shipping may be available upon request. Please reach out to our customer support team for assistance with international orders, including shipping rates and delivery times.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">Order Tracking</h2>
                            <p className="mb-6">
                                Stay informed about the whereabouts of your package by utilizing our order tracking feature. Once your order has been processed, you&apos;ll receive a unique tracking number to monitor its journey from our warehouse to your doorstep.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">Returns and Exchanges</h2>
                            <p className="mb-6">
                                At Codeswear, customer satisfaction is our top priority. If you encounter any issues with your order, such as receiving damaged or defective items, please contact us within <span className="font-semibold">7 days</span> of delivery. We&apos;ll gladly assist you with returns or exchanges to ensure your complete satisfaction with your purchase.
                            </p>
                            <h2 className="text-xl font-semibold mb-2 underline">Contact Us</h2>
                            <p className="mb-6">
                                Should you have any questions or concerns regarding our shipping policy or any other inquiries, please don&apos;t hesitate to reach out to our dedicated customer support team. We&apos;re here to help and ensure that your shopping experience with Codeswear is nothing short of exceptional.
                            </p>
                            <p>
                                Thank you for choosing Codeswear for your clothing needs. We appreciate your support and look forward to serving you again soon!
                            </p>
                        </div>
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

export default ShippingPolicy;
