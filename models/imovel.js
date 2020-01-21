const mongoose = require("mongoose");

const ImovelSchema = new mongoose.Schema({
    descricao: {
        type: String,
    },
    tipo: {//Casa, apartamento, imóvel comecial, terreno
        type: String,
    },
    valor: {
        type: Number
    },
    endereco: {numero: String, apartamento: String, rua: String, bairro: String, cidade: String, estado: String, cep: String, obs: String},
    estado: Number, //0-disponivel, 1-vendido, 2-alugado
    numGarage: Number,
    numQuarto: Number,
    numBanheiro: Number,
    urlImagens: [String],
    area: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Imovel", ImovelSchema);
