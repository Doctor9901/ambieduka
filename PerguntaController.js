const{PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.listar = async (req,res) =>{
    const Pergunta = await prisma.Pergunta.findMany();
    res.json(Pergunta);
};

exports.criar = async (req,res) =>{
    const{nome, codigo, descricao, linhaPerguntaid} = req.body;
    const novo = await prisma.Pergunta.create({
        data:{nome, codigo, descricao, linhaPerguntaid}
    });
    res.status(201).json(novo);
};
exports.editar = async (req, res) =>{
    const{id} = req.params;
    const dados = req.body;
    const atualizado = await prisma.Pergunta.update({
        where:{id:Number(id) },
        data:dados
    });
    res.json(atualizado);
};
exports.excluir = async (req,res) =>{
    const{id} = req.params;
    await prisma.Pergunta.delete({where:{id:Number(id) } });
    res.status(204).end();
};