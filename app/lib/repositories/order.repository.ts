import { Order, OrderStatus } from '../types';

export interface OrderRepository {
    create(order: Order): Order;
    findById(id: string): Order | undefined;
    updateStatus(id: string, status: OrderStatus): Order | undefined;
}

'api/order'