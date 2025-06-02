const express = require('express');
const cors = require('cors');
const{PrismaClient} = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const PerguntaRoutes = require('./PerguntaRoutes');
app.use('./Pergunta',PerguntaRoutes);

app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000');
});
