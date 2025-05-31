import request from 'supertest';
import app from '../app.js';

describe("Testes da rota /usuario", () => {
  
  test("GET /usuario/", async () => {
    const res = await request(app).get("/usuario/");
    expect(res.statusCode).toBe(200);
  });

  test("GET /usuario/:id", async ()=>{
    const id = "c7bd2e66-4d4c-4453-a3ed-045894601af1";
    const res = await request(app).get(`/usuario/${id}`);
    expect(res.statusCode).toBe(200); 
  });

  test("POST /usuario/registra/", async ()=>{
    const res = await request(app).post("/usuario/registra/").send({
      nome: "Teste Jest",
      email: `jest${Date.now()}@mail.com`, // único a cada teste
      senha: "123456",
      tipo: "CLIENTE"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("newUsuario");
  });

  test("PUT /usuario/atualizar/:id", async () => {
    const createRes = await request(app).post("/usuario/registra").send({
      nome: "Criado",
      email: `teste${Date.now()}@mail.com`,
      senha: "123",
      tipo: "CLIENTE"
    });

    const id = createRes.body.newUsuario.id;

    const updateRes = await request(app).put(`/usuario/atualizar/${id}`).send({
      nome: "Atualizado",
      email: `att${Date.now()}@mail.com`,
      senha: "321",
      tipo: "CLIENTE"
    });

    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body).toHaveProperty("upUsuario");
    expect(updateRes.body.upUsuario.nome).toBe("Atualizado");
  });

  test("DELETE /usuario/deletar/:id", async () =>{
    let id = "197170c0-5c5c-473a-b5ab-ab5db8f7ec6c";
    const deleteUsuario = await request(app).delete(`/usuario/deletar/${id}`);

    const find = await request(app).get(`/usuario/${id}`);

    expect(deleteUsuario.statusCode).toBe(204);
    expect(find.statusCode).toBe(404);
  })
});