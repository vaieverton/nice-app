import { Request, Response } from 'express';
import Knex from '../database/connection';

class UsuarioController {
    async index(request: Request, response: Response) {
        const user = await Knex('users').select('users.*') 
        return response.json(user);
    }

    async create(request: Request, response: Response) {
        const {     // desestruturação do item   (const name = request.body.name)
            email, username, password
        } = request.body;

        const users = await Knex('users').select('users.*')
        if (users.some((usr) => usr.email === email || usr.username === username)) {
            return response.json({ message: 'Ja existe'})
        }

        const trx = await Knex.transaction();

        const user = { email, username, password }// Garante que toda a operaçõa será executada, ou caso alguma falhe, cancele


        await trx('users').insert(user);

        await trx.commit();
        return response.json({
            message: 'Ok'
        });
    }

    async authenticate(request: Request, response: Response) {
        const { username, password } = request.body;

        console.log(username, password)

        const users = await Knex('users').select('users.*')

        const selected_user = users.some((user) => user.username === username
            && user.password === password)
        
        if (selected_user) {
            return response.json({message: 'Ok'})
        }

        return response.json({message: 'Error'})

    }
}


export default UsuarioController;