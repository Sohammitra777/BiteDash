'use client';

import { createContext, useContext, useState } from 'react';
import { CartItem, MenuItem } from '../lib/types';

interface CartContextType {
    items: CartItem[];
    addItem: (item: MenuItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    function addItem(item: MenuItem) {
        setItems((prev) => {
            const existing = prev.find((ci) => ci.item.id === item.id);
            if (existing) {
                return prev.map((ci) =>
                    ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
                );
            }
            return [...prev, { item, quantity: 1 }];
        });
    }

    function updateQuantity(id: string, quantity: number) {
        setItems((prev) =>
            prev
                .map((ci) => (ci.item.id === id ? { ...ci, quantity } : ci))
                .filter((ci) => ci.quantity > 0)
        );
    }

    function clearCart() {
        setItems([]);
    }

    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
