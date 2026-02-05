'use client';
import { Order } from '@/app/lib/types';
import { useEffect, useState } from 'react';

export default function OrderStatusPage({ params }: { params: Promise<{ id: string }> }) {
    const [orderId, setOrderId] = useState<string | null>(null);
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        params.then((resolvedParams) => {
            setOrderId(resolvedParams.id);
        });
    }, [params]);

    useEffect(() => {
        if (!orderId) return;

        const interval = setInterval(() => {
            fetch(`/api/orders/${orderId}`)
                .then((res) => res.json())
                .then(setOrder)
                .catch((error) => console.error('Error fetching order:', error));
        }, 3000);

        return () => clearInterval(interval);
    }, [orderId]);

    if (!order) return <p className="p-6">Loading order...</p>;

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-2xl font-bold mb-4">Order Status</h1>

            <p className="mb-2">
                <strong>Customer:</strong> {order.customer.name}
            </p>

            <p className="mb-4">
                <strong>Status:</strong> <span className="font-semibold">{order.status}</span>
            </p>

            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Order Details</h2>

                <ul className="space-y-2">
                    {order.items.map((cartItem) => (
                        <li key={cartItem.item.id} className="flex justify-between border-b pb-1">
                            <span>
                                {cartItem.item.name} × {cartItem.quantity}
                            </span>
                            <span className="font-medium">
                                ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-between mt-4 pt-2 border-t text-lg font-semibold">
                    <span>Total</span>
                    <span>
                        $
                        {order.items
                            .reduce(
                                (total, cartItem) =>
                                    total + cartItem.item.price * cartItem.quantity,
                                0
                            )
                            .toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
