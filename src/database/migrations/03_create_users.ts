import Knex from 'knex';

export async function up(knex: Knex) {  // forma de utilizar o Typescript para ajudar
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();   // 
        table.string('email').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}