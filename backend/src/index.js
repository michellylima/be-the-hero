//Arquivo principal da aplicação
const express = require('express'); // importar funcionalidades do express
const cors = require('cors'); // determinar quem vai poder entrar na aplicação
const routes = require('./routes') // importando o arquivo de rotas

const app = express(); //instanciando a aplicação

app.use(cors()); // se em produção, adicionar o parâmetro origin: 'http://meuapp.com'
app.use(express.json()); // Informando ao express para transformar um arquivo json em um objeto JS
app.use(routes); 

app.listen(3333); //aplicação ouvir a porta 3333