const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        //verificar se a ONG realmente existe
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){ // se a ONG não for encontrada
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return response.json(ong);
    }
}