export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
};

export type CartItem = {
    item: MenuItem;
    quantity: number;
};

export type OrderStatus = 'RECEIVED' | 'PREPARING' | 'OUT_FOR_DELIVERY' | 'DELIVERED';

export type CustomerInfo = {
    name: string;
    address: string;
    phone: string;
};

export type Order = {
    id: string;
    items: CartItem[];
    customer: CustomerInfo;
    status: OrderStatus;
    createdAt: Date;
};
