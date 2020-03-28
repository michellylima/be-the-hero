//Todo tipo de arquivo que vai prover algum tipo de integração com algum serviço externo
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;