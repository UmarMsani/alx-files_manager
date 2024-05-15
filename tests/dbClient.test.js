import dbClient from '../utils/db';

describe('dbClient', () => {
  test('isAlive should return true when connection to MongoDB is successful', async () => {
    const result = await dbClient.isAlive();
    expect(result).toBe(true);
  });

  // We can add more tests for other dbClient methods (nbUsers, nbFiles, etc.)
});
