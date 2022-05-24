import Knex from 'knex';

export async function seed( knex: Knex) {
    await knex('categorias').insert([
        {title: 'Futebol', image: 'futebol.png'},
        {title: 'Basquete', image: 'basquete.svg'},
        {title: 'Natação', image: 'natacao.png'},
        {title: 'Vôlei', image: 'volei.png'},
        {title: 'Skate', image: 'skate.svg'},
        {title: '+Esportes', image: 'sports.svg'},
        {title: 'Música', image: 'musica.svg'},
        {title: 'Museus', image: 'museus.svg'},

    ]);
}