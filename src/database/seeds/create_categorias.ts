import Knex from 'knex';

export async function seed( knex: Knex) {
    await knex('categorias').insert([
        {title: 'Futebol', image: 'futebol.png'},
        {title: 'Basquete', image: 'basquete.png'},
        {title: 'Natação', image: 'natacao.png'},
        {title: 'Vôlei', image: 'volei.png'},
        {title: 'Skate', image: 'skate.png'},
        {title: '+Esportes', image: 'sports.png'},
        {title: 'Música', image: 'musica.png'},
        {title: 'Museus', image: 'museus.png'},
    ]);
}