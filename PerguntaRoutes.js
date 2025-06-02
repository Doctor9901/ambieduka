const express = require('express');
const router = express.Router();
const PerguntaController = require('./PerguntaController');

router.get('/', PerguntaController.listar);
router.post('/', PerguntaController.criar);
router.put('/:id', PerguntaController.editar);
router.delete('/:id', PerguntaController.excluir);

module.exports = router;