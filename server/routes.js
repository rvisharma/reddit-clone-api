import express from 'express';

// Controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';


const routes = express();

// Basic routes
routes.get('/',basicController.get)

// User Routes
routes.post('/signup', userController.post);

export default routes;