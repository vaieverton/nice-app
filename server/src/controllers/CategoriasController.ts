import {Request, Response} from 'express';
import Knex from '../database/connection';

class CategoriaController {
    async index(request: Request, response: Response) {   // Consultar itens
        const categorias = await Knex('categorias').select('*');    // Seleciona todos os elelementos da tabela "itens"
        const serializedItems = categorias.map( item => { // Percorre todos os itens e permite modificá-los
            return {
                id: item.id,
                title: item.title,
                //image_url: `http://localhost:3333/uploads/${item.image}`,   // Para o frontend
                image_url: `http://localhost:3333/uploads/${item.image}`, // Para ficar visível na rede para o Smartphone
            };
        });      
        return response.json(serializedItems);
    }
}

export default CategoriaController;