import express from 'express';
import routes from './routes';
import * as db from './services/db';
import dotenv from "dotenv";

db.init();
dotenv.config();

class App {
    public server;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true}));
    }

    routes() {
        this.server.use('/api/', routes);
    }
}

export default new App().server;