import redis from 'redis';
import { promisify } from 'util';

//Class for performing operations with Redis service.
class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    // Display any errors from the Redis client in the console
    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
      // console.log('Redis client connected to the server');
    });
  }

  // Check if the connection to Redis is successful
  isAlive() {
    return this.client.connected;
  }

  // Retrieve the value from Redis for the specified key
  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  /**
   * Store the value in Redis with an expiration set by
   * the duration argument
   */
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  // Remove the value from Redis for the specified key
  async del(key) {
    this.client.del(key);
  }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();

export default redisClient;
