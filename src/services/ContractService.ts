const Web3 = require('web3');

export class ContractService {

    web3: any;

    hblockContract: any;

    hblockService: any;

    GasPrice: any;

    transactionObject = {
        from: "",
        gas: "",
        gasPrice: this.GasPrice
    };



    constructor() {
        this.checkAndInstatiateWeb3();
    };

    checkAndInstatiateWeb3 = () => {

        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:30000"));

        //this.web3.eth.defaultAccount  =  '0x2420cb97b5791B7bC65dBe3C0001B28D1cA575ab';

        this.hblockContract = this.web3.eth.contract([{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "patients", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "grantAccess", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "addClinic", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "records", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "doc", "type": "address" }], "name": "addDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "getRecord", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "clinics", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }, { "name": "hsh", "type": "string" }], "name": "appendToRecord", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "addPatient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "doctors", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "forceGetRecord", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]);

        this.hblockService = this.hblockContract.at('0x0ff8b5fc85c20fb7cf1d3e37f63c301e040877e0');

        this.GasPrice = this.web3.toWei(2, "gwei");


    }

    addPatient = (address: string) => {

        this.hblockService.addPatient.sendTransaction(address,
            { from: address }, function (err: any, res: any) {
                if (!err)
                    console.log(res);
            }
        );

    }

    addDoctor = (address: string) => {

        this.hblockService.addDoctor.sendTransaction(address,
            { from: address }, function (err: any, res: any) {
                if (!err)
                    console.log(res);
            }
        );
    }

    addClinic = (address: string) => {

        this.hblockService.addClinic.sendTransaction(
            { from: address }, function (err: any, res: any) {
                if (!err)
                    console.log(res);
            }
        );


    }

    grantAccess = (address: string) => {

        this.hblockService
            .grantAccess.sendTransaction(address,
                {
                    from: address
                }, function (err: any, res: any) { if (!err) console.log(res) }
            )

    }


    getRecord = (from: string, to: string) => {

        this.hblockService
            .getRecord.sendTransaction(to,
                {
                    from: from
                }, function (err: any, res: any) {
                    if (!err)
                        console.log("RES is" + res)
                }
            )

    }



    appendToRecord = (from: string, to: string, hash: string) => {
        this.hblockService.appendToRecord.sendTransaction(to, hash, {
            from: from
        }, function (err: any, res: any) {
            if (!err)
                console.log(res)
        });
    }



    forceGetRecord = (from: string, to: string) => {
        
        let byte32 = this.hblockService.forceGetRecord.sendTransaction(to, {
            from: from,
        }, function (err: any, res: any) {
            if (!err)
                console.log(res)
        })


    }






}







