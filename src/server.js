"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var celebrate_1 = require("celebrate");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default(); // Por padrão não entende o Json
var port = process.env.PORT || 3333;
app.use(express_1.default.json()); // Então precisamos dessa chamada
app.use(cors_1.default()); // informar a url do frontend
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads'))); // static - usado para arquivos estaticos (downloads por exemplo)
// path, por trabalhar com caminhos
app.use(celebrate_1.errors()); // Forma padrão do celebrate trabalahr com erros de validação
app.listen(port, function () { return console.log('Server - ON'); });
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
