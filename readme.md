# 🛒 The Real API - E-commerce

API RESTful desenvolvida em Node.js com Express, Prisma ORM e banco de dados SQLite. Documentada com Swagger e testada com Jest + Supertest.

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/ladjs/supertest)
- [UUID](https://www.npmjs.com/package/uuid)
- [Date-fns](https://date-fns.org/)

---

## 🚀 Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/the-real-api.git
cd the-real-api

# Instale as dependências
npm install

# Execute as migrations (se necessário)
npx prisma migrate dev

# Rode a API em modo dev
npm run dev
```

---

## 🌐 Endpoints disponíveis

| Método | Rota                      | Descrição                                |
|--------|---------------------------|------------------------------------------|
| GET    | `/usuario`                | Lista todos os usuários                  |
| GET    | `/usuario/:id`            | Retorna um usuário específico por ID     |
| POST   | `/usuario/registra`       | Cria um novo usuário                     |
| PUT    | `/usuario/atualizar/:id`  | Atualiza um usuário                      |
| GET    | `/api-docs`               | Acessa a documentação Swagger            |

> ⚠️ Rota de criação exige os campos: `nome`, `email`, `senha`, `tipo` (CLIENTE ou ADMIN)

---

## 🔒 Exemplo de JSON para POST `/usuario/registra`

```json
{
  "nome": "Pedro",
  "email": "pedro@example.com",
  "senha": "123456",
  "tipo": "CLIENTE"
}
```

---

## 🧪 Testes

```bash
# Rodar os testes com Jest
npm test
```

Estrutura de testes com Supertest está configurada para simular requisições HTTP diretamente na API.

---

## 🧾 Documentação Swagger

Após rodar a aplicação, acesse:

```
http://localhost:3000/api-docs
```

A documentação é gerada automaticamente com base nos comentários `@swagger` nas rotas.

---

## 🗃️ Estrutura da base de dados

Modelo Prisma (exemplo de tabela `usuarios`):

```prisma
model usuarios {
  id         String   @id @default(uuid())
  nome       String
  email      String   @unique
  senha      String
  tipo       Users
  creado_em  DateTime @default(now())
}

enum Users {
  CLIENTE
  ADMIN
}
```

---

## 📂 Estrutura de pastas

```
📦 src
├── 📁 controller
├── 📁 routes
├── 📁 service
├── 📁 middlewares
├── 📁 test
├── 📁 prisma
├── app.js
├── server.js
├── swagger.js
```

---

## ✍️ Autor

**Pedro Washington**  
[LinkedIn](https://www.linkedin.com/in/devpedrow/) • [GitHub](https://github.com/PWzx07/)

---

## 🧼 To-do (Kanban)

- [x] Criar estrutura base com Express
- [x] Conectar Prisma e SQLite
- [x] Implementar rota de criação de usuário
- [x] Listar e buscar usuários por ID
- [x] Documentar com Swagger
- [x] Escrever testes com Jest + Supertest
- [ ] Implementar recursos de produtos e pedidos
- [ ] Adicionar autenticação e middleware de segurança
- [ ] Deploy da API

---