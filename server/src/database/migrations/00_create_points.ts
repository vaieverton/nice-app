import Knex from 'knex';

export async function up(knex: Knex) {  // forma de utilizar o Typescript para ajudar
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();   // coluna de identificação e com autoincremento
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('endereco').notNullable();
        table.string('items').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('points')
}