import express from 'express';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';
import cors from 'cors';



const app = express(); // Por padrão não entende o Json

const port = process.env.PORT || 3333;

app.use(express.json()); // Então precisamos dessa chamada

app.use(cors()); // informar a url do frontend
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // static - usado para arquivos estaticos (downloads por exemplo)
// path, por trabalhar com caminhos

app.use(errors()); // Forma padrão do celebrate trabalahr com erros de validação

app.listen(port, () => console.log('Server - ON'));




/* testes
import express, { request, response } from 'express';
const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user =>user.includes(search)): users; // if ternário

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});

*/