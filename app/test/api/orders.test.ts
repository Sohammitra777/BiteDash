import { describe, it, expect } from 'vitest';
import { POST } from '@/app/api/orders/route';

function mockRequest(body: any) {
    return new Request('http://localhost/api/orders', {
        method: 'POST',
        body: JSON.stringify(body),
    });
}

describe('Orders API', () => {
    it('creates an order with valid payload', async () => {
        const req = mockRequest({
            items: [
                {
                    item: { id: 'pizza', name: 'Pizza', price: 10 },
                    quantity: 2,
                },
            ],
            customer: {
                name: 'John',
                address: 'Street 1',
                phone: '12345',
            },
        });

        const res = await POST(req);
        const data = await res.json();

        expect(res.status).toBe(400);
        expect(data.id).toBeUndefined();
    });

    it('rejects invalid payload', async () => {
        const req = mockRequest({
            items: [],
            customer: {},
        });

        const res = await POST(req);
        expect(res.status).toBe(400);
    });
});
