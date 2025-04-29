import express from "express";
import { logger, logEvents } from "./middlewares/logger.middlewares.js";
import produtosRoutes from "./routes/produtoRouter.js";

const app = express();
const PORT = 3300;

app.use(logger);
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
    logEvents(`Rodando na porta http://localhost:${PORT}`,`listen.log`);
});