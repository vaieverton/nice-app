import Knex from 'knex';

export async function seed( knex: Knex) {
    await knex('users').insert([
        {email: 'super@super.com', username: 'super', password: '123'},
        {email: 'everton@gmail.com', username: 'everton', password: '123'},

    ]);
}