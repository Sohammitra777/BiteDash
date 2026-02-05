import { CartProvider } from './context/CartContext';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>BiteDash</title>
            </head>

            <body>
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}
