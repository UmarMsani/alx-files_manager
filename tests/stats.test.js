import request from 'supertest';
import app from '../server';

describe('GET /stats', () => {
  test('should return status 200 with stats', async () => {
    const response = await request(app).get('/stats');
    expect(response.status).toBe(200);
  });
});
