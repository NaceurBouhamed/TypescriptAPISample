const ipfsAPI = require('ipfs-api');

const mongoose = require('mongoose');

mongoose.connect('mongodb://35.160.146.204:27017/Dapp');

const Patient = require('./../models/Patient');


export class IpfsService {

    db = mongoose.connection;

    patient: any;

    ipfs: any;

    ob: any;

    hash: string;

    recordSample = {
        date: "",
        hcare: "",
        description: ""
    }

    constructor() {
        this.hash = "";
        this.ipfs = ipfsAPI('34.217.82.63', '5001', { protocol: 'http' });
        this.db.once('open', function () {
            console.log("DB connection alive");
        });
        this.patient = new Patient();
        this.getHash('0xd93E83d9062c2F0baA201EA6592FE0cB50d9172b');
        this.pullFile('QmRrUg6vCnMZr45dxS7eSmhUxi6xRpm6dgrovZbb9JHGSA');


    };




    pushFile = (obj: any, addr: string) => {
        
        console.log(obj);


        obj.records.push(this.recordSample);
        
        var buf = Buffer.from(JSON.stringify(obj));
        this.ipfs.files.add(buf, (err: any, res: any) => {
            console.log(res[0].path);
            this.hash = res[0].path;
            Patient.findOne({ 'address': addr }, (err: any, pat: any) => {
                pat.hash = res[0].path;
                pat.save((err: any, pat: any) => {
                    if (err)
                        console.log('error');
                    else
                        console.log('success');
                });

            })
        })
    }

    pullFile = (hash: string) => {
        console.log("pulling frm hash:"+this.hash);
        this.ipfs.files.cat(hash, (err: any, res: any) => {
            this.ob = JSON.parse(res.toString());
        })
    }

    getHash = (ch: string) => {
        Patient.findOne({ 'address': ch }, (err: any, res: any) => {
            this.hash = res.hash;
        })
    }

    setSample = (dat: any, hc: any, desc: any) => {
        this.recordSample.date = dat;
        this.recordSample.hcare = hc;
        this.recordSample.description = desc;
    }



}
