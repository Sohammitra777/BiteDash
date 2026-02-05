'use client';

import { useCart } from '../context/CartContext';

export default function Cart() {
    const { items, updateQuantity } = useCart();

    if (items.length === 0) {
        return <p className="text-gray-500 border text-center mt-2">Add Items</p>;
    }

    return (
        <div className="border rounded p-4">
            <h2 className="font-semibold mb-2">Cart</h2>

            {items.map(({ item, quantity }) => (
                <div key={item.id} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <input
                        type="number"
                        min={0}
                        value={quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="w-16 border rounded px-2"
                    />
                </div>
            ))}
        </div>
    );
}
