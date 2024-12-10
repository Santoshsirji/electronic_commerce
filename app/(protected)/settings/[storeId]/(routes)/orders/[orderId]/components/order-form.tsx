"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

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
import { Order } from "@prisma/client";

const formSchema = z.object({
    status: z.string().min(1),
    isPaid: z.boolean().default(false).optional(),
});

// TypeScript: Type definition for form values inferred from schema
type OrderFormValues = z.infer<typeof formSchema>;

interface OrderFormProps {
    initialData: Order | null;
}

const OrderForm: React.FC<OrderFormProps> = ({ initialData }) => {
    const [isMounted, setIsMounted] = useState(false);

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const params = useParams();

    const defaultValues: OrderFormValues = initialData || {
        status: "UNFULFILLED",
        isPaid: false,
    };

    const form = useForm<OrderFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const toastMessage = "The order has been updated successfully.";
    const action = "Update Order";

    const onSubmit = async (data: OrderFormValues) => {
        try {
            setLoading(true);
            await axios.post(`/api/${params.storeId}/order/${params.orderId}`, data);
            form.reset();
            router.refresh();
            router.back();
            toast.success(toastMessage);
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Heading title="Update Order" description="Update an order" />
            <div className="flex flex-col justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="md:grid md:grid-cols-3 gap-8 space-y-1">
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Update the status of the order." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="FULFILLED">FULFILLED</SelectItem>
                                                <SelectItem value="UNFULFILLED">UNFULFILLED</SelectItem>
                                                <SelectItem value="PROCESSING">PROCESSING</SelectItem>
                                                <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="isPaid"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>Paid</FormLabel>
                                            <FormDescription>Has the payment been made?</FormDescription>
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

export default OrderForm;
