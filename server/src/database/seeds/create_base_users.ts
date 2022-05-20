import Knex from 'knex';

export async function seed( knex: Knex) {
    await knex('users').insert([
        {email: 'super@super.com', username: 'super', password: '123321'}
    ]);
}