export type MenuItems = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
};

export type CartItems = {
    item: MenuItems;
    quantity: number;
};

export type OrderStatus =
    | "RECEIVED"
    | "PREPARING"
    | "OUT_FOR_DELIVERY"
    | "DELIVERED";

export type CustomerInfo = {
    name: string;
    address: string;
    phone: string;
};

export type Order = {
    id: string;
    items: CartItems;
    customer: CustomerInfo;
    status: OrderStatus;
    createdAt: Date;
};
