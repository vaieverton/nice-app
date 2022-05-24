"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var celebrate_1 = require("celebrate");
var multer_2 = __importDefault(require("./config/multer"));
var CategoriasController_1 = __importDefault(require("./controllers/CategoriasController"));
var PointsController_1 = __importDefault(require("./controllers/PointsController"));
var UsuarioController_1 = __importDefault(require("./controllers/UsuarioController"));
var routes = express_1.default.Router();
var upload = multer_1.default(multer_2.default);
var itemsController = new CategoriasController_1.default();
var pointsController = new PointsController_1.default();
var usuarioController = new UsuarioController_1.default();
// get - Buscar informação
// post - Criar informação
// *** index, show, create, update, delete
routes.get('/categorias', itemsController.index); // index - Para Listagem; show - para mostar apenas um registro
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/users', usuarioController.index);
routes.post('/users', usuarioController.create);
routes.post('/authentication', usuarioController.authenticate);
routes.post('/points', // Rota
upload.single('image'), // Faz o upload d imagem
celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
        whatsapp: celebrate_1.Joi.number().required(),
        latitude: celebrate_1.Joi.number().required(),
        longitude: celebrate_1.Joi.number().required(),
        description: celebrate_1.Joi.string().required(),
        endereco: celebrate_1.Joi.string().required(),
        items: celebrate_1.Joi.string().required(),
    })
}, {
    abortEarly: false // Passar todos os campos errados
}), pointsController.create); // Cria o Ponto de coleta
exports.default = routes; // Precisa exportar, para que seja importada
/*
routes.get('/', (request, response) => {   // Home
    return response.json({ message: 'Hello World' });
});
*/ 
