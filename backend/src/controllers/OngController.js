// Para exportar um objeto com os métodos da ONG

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    // Método para listar as ONGS e seus dados
    async index (resquest, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    // Método para criar uma ONG
    async create(request, response) { 
        const { name, email, whatsapp, city, uf } = request.body;

        //criar a ID aleatoriamente, gerar 4 caracteres hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({ //inserindo na tabela ongs doBD
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    },
};