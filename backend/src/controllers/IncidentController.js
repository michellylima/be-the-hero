const connection = require('../database/connection');

module.exports = {
    //Método para listar os incidents
    async index(request, response) {
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count(); //conta quantos casos existem

        console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5) //paginação
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']) //manda para o header da response o valor de count

        return response.json(incidents);
    },

    //Método para criar um incident
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

       const [id] = await connection('incidents').insert({
           title,
           description,
           value,
           ong_id,
       });

       return response.json({ id });
    },

    //Método para deletar um incident
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        //buscar o incidente a ser deletado e selecionar a ONG dona do incidente
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(incident.ong_id != ong_id) { // se a ONG que está tentando deletar não for a dona do incident, retorna um erro
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); // Resposta de sucesso sem conteúdo
    }
};