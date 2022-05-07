import Knex from 'knex';

export async function up(knex: Knex) {  // forma de utilizar o Typescript para ajudar
    return knex.schema.createTable('categorias', table => {
        table.increments('id').primary();   // coluna de identificação e com autoincremento
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('categorias')
}