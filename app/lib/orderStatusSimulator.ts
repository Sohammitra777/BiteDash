import { orderRepo } from "./repositories/order.memory";
import { OrderStatus } from "./types";

const statusFlow: OrderStatus[] = [
    "RECEIVED",
    "PREPARING",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
];

export function startOrderStatusSimulation(orderId: string) {
    let index = 0;

    const interval = setInterval(() => {
        index++;

        if (index >= statusFlow.length) {
            clearInterval(interval);
            return;
        }

        orderRepo.updateStatus(orderId, statusFlow[index]);
    }, 10000);
}
