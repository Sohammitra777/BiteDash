import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/orders/[id]/route';
import { orderRepo } from '@/app/lib/repositories/order.memory';

describe('Get order', () => {
    it('returns order by id', async () => {
        const order = orderRepo.create({
            id: 'test-id',
            items: [],
            customer: { name: 'A', address: 'B', phone: 'C' },
            status: 'RECEIVED',
            createdAt: new Date(),
        });

        const res = await GET({} as Request, {
            params: Promise.resolve({ id: order.id }),
        });

        const data = await res.json();
        expect(data.id).toBe(order.id);
    });
});
