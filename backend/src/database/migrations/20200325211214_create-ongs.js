exports.up = function(knex) { //responsável pela criação da tabela
// criando uma tabela no knex
 return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //se der problema, como desfazer
    return knex.dropTable('ongs');
};
