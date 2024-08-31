const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    assunto: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Materia', materiaSchema);
