import * as path from 'path';
import express from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';
import { ContractService } from './services/ContractService';
import { IpfsService } from './services/IpfsService';


// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;
    private contractService: ContractService;
    private ipfsService: IpfsService;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.contractService = new ContractService();
        this.ipfsService = new IpfsService();
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

        router.get('/hash/:address', (req, res, next) => {
            this.ipfsService.getHash(req.params.address.toString())
            setTimeout(() =>
                res.json({
                    message: this.ipfsService.hash
                }), 2000);
        });

        router.post('/push/:address', (req, res, next) => {


            this.ipfsService.setSample(req.body.date, req.body.hcare, req.body.desc);

            this.ipfsService.getHash(req.params.address);

            this.ipfsService.pullFile(this.ipfsService.hash);

            setTimeout(() => (this.ipfsService.pushFile(this.ipfsService.ob,req.params.address), 4000));

            setTimeout(() => res.json({
                message: this.ipfsService.hash
            }),8000);
        });

        router.get('/patient/isAllowed/:address', (req, res, next) => {
            res.json({
                message: this.contractService.hblockService.patients.call(req.params.address)
            });
        });

        router.get('/doctor/append/:from/:to', (req, res, next) => {
            res.json({
                message: this.contractService.hblockService.appendToRecord(req.params.from.toString(), req.params.to.toString())
            });
        });


        router.get('/doctor/getRecord/:from/:to', (req, res, next) => {

            let add1 = req.params.from;

            let add2 = req.params.to;

            let ss = this.contractService.getRecord(req.params.from.toString(), req.params.to.toString());

            let sx = this.contractService.hblockService.records.call(req.params.to.toString())

            //let ss = this.contractService.hblockService.getRecord(add1,add2);


            res.json({
                message: ss || sx
            });
        });

        router.get('/doctor/getRecord/:from/:to', (req, res, next) => {
            res.json({
                message: this.contractService.hblockService.getRecord(req.params.from.toString(), req.params.to.toString())
            });
        });









        router.get('/patient/grantAccess/:address', (req, res, next) => {
            //this.contractService.addPatient('0xf95d5baa6454aa43fab2ec73b40c2938af45947a');
            //this.contractService.addDoctor('0xfe491b3b2a57f70384bbffc2a175983ad1949265'); 
            //this.contractService.grantAccess('0xf95d5baa6454aa43fab2ec73b40c2938af45947a');
            var ss = this.contractService.grantAccess(req.params.address);
            //console.log(this.contractService.hblockService.patients.call('0xf95d5baa6454aa43fab2ec73b40c2938af45947a'));
            //this.contractService
            //.appendToRecord("0xfe491b3b2a57f70384bbffc2a175983ad1949265", "0xf95d5baa6454aa43fab2ec73b40c2938af45947a", "hello world!");
            //this.contractService.getRecord('0xfe491b3b2a57f70384bbffc2a175983ad1949265','0xf95d5baa6454aa43fab2ec73b40c2938af45947a');
            //this.contractService.addClinic('0xfe491b3b2a57f70384bbffc2a175983ad1949265');
            //this.contractService.forceGetRecord('0xfe491b3b2a57f70384bbffc2a175983ad1949265','0xf95d5baa6454aa43fab2ec73b40c2938af45947a');
            res.json({
                message: ss
            });

        });

        this.express.use('/api', router);



    }




}

export default new App().express;