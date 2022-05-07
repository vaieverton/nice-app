import Knex from 'knex';

export async function seed( knex: Knex) {
    await knex('categorias').insert([
        {title: 'Futebol', image: 'futebol.svg'},
        {title: 'Basquete', image: 'basquete.svg'},
        {title: 'Natação', image: 'natacao.svg'},
        {title: 'Vôlei', image: 'volei.svg'},
        {title: 'Música', image: 'musica.svg'},
        {title: 'Show', image: 'show.svg'}
    ]);
}