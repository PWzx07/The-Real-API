import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de E-commerce',
    version: '1.0.0',
    description: 'Documentação da API de E-commerce',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // aqui tem que apontar pro caminho certo dos seus arquivos
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };