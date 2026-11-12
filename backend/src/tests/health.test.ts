import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

// Tests for the health endpoint
describe('GET /api/health', () => {

    // Successful response test
    it('should return status 200 and the expected response', async () => {
        const response = await request(app).get('/api/health');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'ok',
            application: 'Wonder API',
        });
    });
});
