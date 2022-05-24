import path from 'path';

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },

        migrations: {       // diretório das migrations
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },

        seeds: {       // diretório das migrations
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        },
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },

        migrations: {       // diretório das migrations
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },

        seeds: {       // diretório das migrations
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        },
    },
    useNullAsDefault: true,
};