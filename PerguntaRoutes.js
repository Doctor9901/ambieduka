// backend/src/routes/perguntas.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const perguntas = await prisma.pergunta.findMany();
  res.json(perguntas);
});

export default router;