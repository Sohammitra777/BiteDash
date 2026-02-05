'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const { items, clearCart } = useCart();
    const router = useRouter();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (!items.length) {
            alert('Please Add items');
            return;
        }

        setLoading(true);

        const res = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items,
                customer: { name, address, phone },
            }),
        });

        if (!res) {
            alert('Failed to place order');
            setLoading(false);
            return;
        }

        const order = await res.json();
        clearCart();
        router.push(`/order/${order.id}`);
    }

    return (
        <form onSubmit={handleSubmit} className="border rounded p-4 mt-4">
            <h2 className="font-semibold mb-2">Checkout</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded p-2 mb-2"
            />

            <input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full border rounded p-2 mb-2"
            />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border rounded p-2 mb-2"
            />

            <button disabled={loading} className="bg-black text-white px-4 py-2 rounded w-full">
                {loading ? 'Placing order...' : 'Place Order'}
            </button>
        </form>
    );
}
