import Cart from '@/app/components/Cart';
import { CartProvider } from '@/app/context/CartContext';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('shows empty cart message', () => {
    render(
        <CartProvider>
            <Cart />
        </CartProvider>
    );

    expect(screen.getByText(/Add Items/i)).toBeInTheDocument();
});
