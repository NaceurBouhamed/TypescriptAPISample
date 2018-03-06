import * as path from 'path';
import express from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';
import { ContractService } from './services/ContractService';


// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;
    private contractService: ContractService;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.contractService = new ContractService();
        
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

        router.get('/', (req, res, next) => {
            //this.contractService.getRecord("0xd93E83d9062c2F0baA201EA6592FE0cB50d9172b");
            res.json({
                message: "Hello world!"
            });
        });

        router.get('/hend', (req, res, next) => {
            //this.contractService.addPatient('0x6a8878704e95f57a179f6a5e84142661c002bb54');
            //this.contractService.addDoctor('0x97cd1e33d6174dd87c902f2eeb4575d96cfba309'); 
            //this.contractService.grantAccess('0x6a8878704e95f57a179f6a5e84142661c002bb54');
            //console.log(this.contractService.hblockService.patients.call('0x6a8878704e95f57a179f6a5e84142661c002bb54'));
            //this.contractService
            //.appendToRecord("0x97cd1e33d6174dd87c902f2eeb4575d96cfba309", "0x6a8878704e95f57a179f6a5e84142661c002bb54", "hello world!");
            //this.contractService.getRecord('0x97cd1e33d6174dd87c902f2eeb4575d96cfba309','0x6a8878704e95f57a179f6a5e84142661c002bb54');
            this.contractService.addClinic('0x97cd1e33d6174dd87c902f2eeb4575d96cfba309');
            
            this.contractService.forceGetRecord('0x97cd1e33d6174dd87c902f2eeb4575d96cfba309','0x6a8878704e95f57a179f6a5e84142661c002bb54');
            

            res.json({
                message: "Hello Hend!"
            });
            
        });

        this.express.use('/', router);
        this.express.use('/hend', router);


    }




}

export default new App().express;