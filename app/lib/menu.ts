import { MenuItem } from './types';

export const menu: MenuItem[] = [
    {
        id: 'pizza',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce and mozzarella',
        price: 12.99,
        image: '/pizza.jpg',
    },
    {
        id: 'burger',
        name: 'Cheese Burger',
        description: 'Beef patty with cheddar cheese and lettuce',
        price: 9.99,
        image: '/burger.jpg',
    },
    {
        id: 'fries',
        name: 'French Fries',
        description: 'Crispy golden fries',
        price: 4.99,
        image: '/fries.jpg',
    },
];
