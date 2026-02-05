import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { Order } from "@/app/lib/types";
import { orderRepo } from "@/app/lib/repositories/order.memory";
import { startOrderStatusSimulation } from "@/app/lib/orderStatusSimulator";

export async function POST(req: Request) {
    const body = await req.json();

    if (!body.items || !body.customer) {
        return NextResponse.json(
            { error: "Invalid order data" },
            { status: 400 },
        );
    }

    const order: Order = {
        id: randomUUID(),
        items: body.items,
        customer: body.customer,
        status: "RECEIVED",
        createdAt: new Date(),
    };

    orderRepo.create(order);
    startOrderStatusSimulation(order.id);

    return NextResponse.json(order, { status: 201 });
}
