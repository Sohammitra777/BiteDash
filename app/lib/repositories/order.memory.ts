import { Order, OrderStatus } from "../types";
import { OrderRepository } from "./order.repository";

class InMemoryOrderRepository implements OrderRepository {
    private orders = new Map<string, Order>();

    create(order: Order): Order {
        this.orders.set(order.id, order);
        return order;
    }

    findById(id: string): Order | undefined {
        return this.orders.get(id);
    }

    updateStatus(id: string, status: OrderStatus): Order | undefined {
        const order = this.orders.get(id);
        if (!order) return undefined;

        order.status = status;
        return order;
    }
}

export const orderRepo = new InMemoryOrderRepository();
