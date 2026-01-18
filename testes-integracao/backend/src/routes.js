import express from 'express';
import userController from './controller/userController.js';
import logController from './controller/logController.js';

const routes = express();

routes.use("/user", userController);
routes.use("/log", logController);

export default routes;