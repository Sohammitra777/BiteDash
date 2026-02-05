'use client';

import { useEffect, useState } from 'react';
import MenuItem from './components/MenuItem';
import { MenuItem as MenuItemType } from './lib/types';
import { useCart } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function HomePage() {
    const [menu, setMenu] = useState<MenuItemType[]>([]);
    const { addItem } = useCart();

    useEffect(() => {
        fetch('/api/menu')
            .then((res) => res.json())
            .then(setMenu);
    }, []);

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {menu.map((item) => (
                    <MenuItem key={item.id} item={item} onAdd={() => addItem(item)} />
                ))}
            </div>
            <Cart />
            <Checkout />
        </main>
    );
}
