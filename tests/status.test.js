import request from 'supertest';
import app from '../server';

describe('GET /status', () => {
  test('should return status 200 with Redis and DB status', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body.redis).toBeTruthy();
    expect(response.body.db).toBeTruthy();
  });
});
