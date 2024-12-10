"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

import useCart from "@/hooks/use-cart";
import CartItem from "../cart/components/cart-item";
import Summary from "../cart/components/summary";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/Heading";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    name: z.string().min(1),
    phone: z.coerce.string().min(10),
    secondphone: z.coerce.string().min(10),
    email: z.string().min(1),
    address: z.string().min(1),
    district: z.string().min(1),
    acknowledge: z.boolean().default(false).optional(),
});

// TypeScript: Type definition for form values inferred from schema
// type OrderFormValues = z.infer<typeof formSchema>;

const OrderPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    const items = useCart((state) => state.items);

    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const params = useParams();

    const defaultValues = {
        name: '',
        phone: '+977',
        secondphone: '+977',
        email: '',
        address: '',
        district: '',
        acknowledge: false,
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    const toastMessage = `Your request has been received. You'll soon be contacted by our team,`;
    const action = 'Place Order';

    const districts = [
        "Bhaktapur",
        "Chitwan",
        "Dhading",
        "Dolakha",
        "Kathmandu",
        "Kavrepalanchok",
        "Lalitpur",
        "Makwanpur",
        "Nuwakot",
        "Ramechhap",
        "Rasuwa",
        "Sindhuli",
        "Sindhupalchok",
    ];


    const onSubmit = async (data: any) => {

        try {
            setLoading(true);
            data = { ...data, productIds: items.map((item) => item.id) }
            console.log(data);
            await axios.post(`/api/${process.env.STORE_ID}/order`, data);
            form.reset();
            router.refresh();
            router.push('/cart')
            // router.push(`/settings/${params.storeId}/products`);
            toast.success(toastMessage);
        } catch (error) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Heading title="Place Order" description="place your order here!" />
            <div className="mt-0 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                <div className="lg:col-span-7">
                    {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                    <ul>
                        {cart.items.map((item) => (
                            <CartItem key={item.id} data={item} />
                        ))}
                    </ul>
                </div>
                <Summary CreateOrder />
            </div>
            <div className="flex flex-col justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="md:grid md:grid-cols-3 gap-8 space-y-1">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input type="number" disabled={loading} placeholder="98xxxxxxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="secondphone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Phone</FormLabel>
                                        <FormControl>
                                            <Input type="number" disabled={loading} placeholder="98xxxxxxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="text" disabled={loading} placeholder="johndoe@mail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input type="text" disabled={loading} placeholder="Your Place" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="district"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>District</FormLabel>
                                        <Select disabled={loading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue defaultValue={field.value} placeholder="Select your district" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {districts.map((district) => (
                                                    <SelectItem key={district} value={district}>
                                                        {district}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="acknowledge"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>Acknowledgement</FormLabel>
                                            <FormDescription>
                                                I affirm that the information provided in this form is correct, and I have sufficient funds to cover the cost of the order. I will not negotiate price later.
                                            </FormDescription>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button disabled={loading} className="ml-auto" type="submit">
                            {action}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default OrderPage;
