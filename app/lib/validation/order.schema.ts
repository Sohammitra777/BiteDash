// order.schema.ts
import { z } from 'zod';

export const menuItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
});

export const cartItemSchema = z.object({
    item: menuItemSchema,
    quantity: z.number().int().min(1),
});

export const orderSchema = z.object({
    items: z.array(cartItemSchema).min(1),
    customer: z.object({
        name: z.string().min(1),
        address: z.string().min(1),
        phone: z.string().min(5),
    }),
});
