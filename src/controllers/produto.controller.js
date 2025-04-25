import { readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";
import { logEvents } from "../middlewares/logger.middlewares.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonProduto = __dirname + '/../data/produto.json';

let produto = JSON.parse(
  readFileSync(jsonProduto, 'utf-8')
);

produto = produto.map(m => ({
    id: m.id || uuidv4(),
    ...m
}));

writeFileSync(jsonProduto, JSON.stringify(produto, null, 2), "utf-8");

export const exibirProdutos = (req, res)=>{
    res.status(200).json(produto);
};

