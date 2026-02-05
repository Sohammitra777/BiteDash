import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { Order } from '@/app/lib/types';
import { orderRepo } from '@/app/lib/repositories/order.memory';
import { startOrderStatusSimulation } from '@/app/lib/orderStatusSimulator';

import { ZodError } from 'zod';
import { orderSchema } from '@/app/lib/validation/order.schema';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = orderSchema.parse(body);

        const order: Order = {
            id: randomUUID(),
            items: parsed.items,
            customer: parsed.customer,
            status: 'RECEIVED',
            createdAt: new Date(),
        };

        orderRepo.create(order);
        startOrderStatusSimulation(order.id);

        return NextResponse.json(order, { status: 201 });
    } catch (err) {
        if (err instanceof ZodError) {
            return NextResponse.json({ error: err.issues }, { status: 400 });
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
