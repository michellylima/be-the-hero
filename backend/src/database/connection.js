const knex = require('knex'); //importanto knex
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //conexão de desenvolvimento

module.exports = connection;
