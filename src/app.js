import express from "express";
import dotenv from "dotenv";
import { logger, logEvents } from "./middlewares/logger.middlewares.js";
import usuarioRoutes from "./routes/usuario.route.js";

dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(logger);
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
    logEvents(`Rodando na porta htt://localhost:${PORT}`,`listen.log`);
});

app.use("/usuario", usuarioRoutes);

export default app;