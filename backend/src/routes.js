const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router(); //desacoplando o módulo de rotas do express em uma nova variável

routes.post('/sessions', SessionController.create); // Rota para CRIAR uma sessão (LOGAR)

routes.get('/ongs', OngController.index); // Rota para LISTAR as ONGS
routes.post('/ongs', OngController.create); // Rota para CADASTRAR uma nova ONG

routes.get('/profile', ProfileController.index); // Rota para LISTAR os incidents ESPECÍFICOS de uma ONG

routes.get('/incidents', IncidentController.index); // Rota para LISTAR TODOS os incidents
routes.post('/incidents', IncidentController.create); // Rota para CRIAR um novo incident
routes.delete('/incidents/:id', IncidentController.delete); // Rota para DELETAR um incident

 module.exports = routes;