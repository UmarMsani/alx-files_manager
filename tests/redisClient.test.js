import redisClient from '../utils/redis';

describe('redisClient', () => {
  test('isAlive should return true when connection to Redis is successful', async () => {
    const result = await redisClient.isAlive();
    expect(result).toBe(true);
  });

  // We can add more tests for other redisClient methods (get, set, del, etc.)
});
