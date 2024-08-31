const express = require('express');
const router = express.Router();
const Materia = require('../models/Materia');

router.post('/', async (req, res) => {
    const { nome, assunto } = req.body;
    const newMateria = new Materia({ nome, assunto });
    await newMateria.save();
    res.json(newMateria);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const materias = await Materia.find();
    res.json(materias);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { nome, assunto } = req.body;
    const updatedMateria = await Materia.findByIdAndUpdate(req.params.id, { nome, assunto }, { new: true });
    res.json(updatedMateria);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Materia.findByIdAndDelete(req.params.id);
    res.json({Assunto: 'Matéria deletada com sucesso!' });
});

module.exports = router;
