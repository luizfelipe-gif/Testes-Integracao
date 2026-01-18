import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import {AppDataSource} from './database/data-source.js';

const server = express();

server.use(express.json());
server.use(cors());
server.use('/', routes);

AppDataSource.initialize().then(async () => {
   server.listen(3333, () => {
      console.log("Servidor conectado.");
   });
});