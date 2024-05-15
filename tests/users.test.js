import request from 'supertest';
import app from '../server';

describe('POST /users', () => {
  test('should create a new user and return status 201', async () => {
    const newUser = {
      email: 'test@example.com',
      password: 'password123',
    };
    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
  });

  test('should return status 400 when email is missing', async () => {
    const newUser = {
      password: 'password123',
    };
    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(400);
  });
});
