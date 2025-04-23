import express from "express";
import produtosRoutes from "./routes/produtoRouter.js";

const app = express();
const PORT = 3300;

app.use(express.json());

app.use("/produtos", produtosRoutes);

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`)
});