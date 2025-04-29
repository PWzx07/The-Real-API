import { readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonProduto = __dirname + '/../data/produto.json';

let produtos = JSON.parse(
  readFileSync(jsonProduto, 'utf-8')
);

produtos = produtos.map(m => ({
    id: m.id || uuidv4(),
    ...m
}));

writeFileSync(jsonProduto, JSON.stringify(produtos, null, 2), "utf-8");

export const exibirProdutos = (req, res)=>{         //GET
    res.status(200).json(produtos);
};

export const exibirId = (req, res)=>{               //GET
  const id = req.params.id;

  const produtoEncontrado = produtos.find(produto => produto.id == id);

  if (produtoEncontrado) {
    res.status(200).json(produtoEncontrado);
  } else {
    res.status(404).json({ mensagem: "Produto não encontrado" });
  }
};

export const enviarProduto = (req, res)=>{     //POST

  const { nome, preco, descricao, marca } = req.body;

  if (!nome || !preco || !descricao || !marca) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  const novoProduto = {
    id: uuidv4(), 
    nome,
    preco,
    descricao,
    marca
  };

  produtos.push(novoProduto);

  writeFileSync(jsonProduto, JSON.stringify(produtos, null, 2), "utf-8");
  
  res.status(201).json(novoProduto);
}