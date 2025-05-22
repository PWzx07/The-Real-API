import request from 'supertest';
import app from '../app.js';

describe("Testes da rota /usuario", () => {
  let id;
  test("GET /usuario/", async () => {
    const res = await request(app).get("/usuario/");
    expect(res.statusCode).toBe(200);
  });
});  