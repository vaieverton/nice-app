import knex from 'knex';
import path from 'path'     // usar caminhos com o Node (ela "padroniza" caminhos)

const connection = knex ({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),   // dirname - retorna o endereço do diretório que ele está
    },
    useNullAsDefault: true,
});

export default connection;