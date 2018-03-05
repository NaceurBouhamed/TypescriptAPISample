import * as path from 'path';
import express from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';
import  { ContractService } from './services/ContractService';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;
    private contractService : ContractService;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.contractService=new ContractService();

    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler

        router.get('*', (req, res, next) => {
            this.contractService.createWallet();
            res.json({
                message: "Hello World!"
            });
        });
        this.express.use('/', router);


    }




}

export default new App().express;