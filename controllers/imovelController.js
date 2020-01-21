const Imovel = require('../models/imovel')

exports.inserir = async (req, res) => {
    try {
        const imovel = await Imovel.create(req.body);

        return res.json({ imovel });
    } catch (err) {
        return res.status(400).json({ error: "Erro ao cadastrar imóvel." });
    }
};

exports.buscarId = async (req, res) => {
    try {
        const { imovelId } = req.params;
        const imovel = await Imovel.findById(imovelId);
        return res.json({ imovel });

    } catch (err) {

        return res.status(400).json({ error: "Não foi possível buscar as informações do imóvel" });
    }
};

exports.buscarTodos = async (req, res) => {
    try {

        const imoveis = await Imovel.find({});

        return res.json({ imoveis });
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "Não foi possível buscar as informações dos imóveis" });
    }

};

exports.buscarBairro = async (req, res) => {
    try {

        const imoveis = await Imovel.find({});

        return res.json({ imoveis });
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "Não foi possível buscar as informações dos imóveis" });
    }
};
