import express, { request, response } from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate';

import multerConfig from './config/multer';

import ItemsController from './controllers/CategoriasController'
import PointsController from './controllers/PointsController';


const routes = express.Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const pointsController = new PointsController();

// get - Buscar informação
// post - Criar informação
// *** index, show, create, update, delete
routes.get('/categorias', itemsController.index);    // index - Para Listagem; show - para mostar apenas um registro

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post(
    '/points',                      // Rota
    upload.single('image'),         // Faz o upload d imagem
    celebrate({                     //Validar elementos
        body: Joi.object().keys({
            name:   Joi.string().required(),
            email:  Joi.string().required().email(),
            whatsapp:  Joi.number().required(),
            latitude:  Joi.number().required(),
            longitude: Joi.number().required(),
            city:   Joi.string().required(),
            uf:     Joi.string().required().max(2),
            items:   Joi.string().required(),
        })
    }, {
        abortEarly: false       // Passar todos os campos errados
    }),
    pointsController.create);    // Cria o Ponto de coleta


export default routes;  // Precisa exportar, para que seja importada

/*
routes.get('/', (request, response) => {   // Home
    return response.json({ message: 'Hello World' });
});
*/