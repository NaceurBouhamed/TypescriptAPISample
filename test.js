const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/'));

var addr = '0x8e2f97b72e96fb8e1bebb423df2007a23b9806ea';

var hblockContract = web3.eth.contract([{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "patients", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "grantAccess", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "addClinic", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "records", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "doc", "type": "address" }], "name": "addDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "getRecord", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "clinics", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }, { "name": "hsh", "type": "bytes32" }], "name": "appendToRecord", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "addPatient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "doctors", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "patient", "type": "address" }], "name": "forceGetRecord", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]);

var hblockService = hblockContract.at(addr);

// console.log(hblockService);

hblockService.addPatient.sendTransaction('0x6a8878704e95f57a179f6a5e84142661c002bb54',
    { from: '0x6a8878704e95f57a179f6a5e84142661c002bb54' }, function (err, res) {
        if (!err)
            console.log(res);
    }
);

hblockService.grantAccess.sendTransaction('0x6a8878704e95f57a179f6a5e84142661c002bb54',
    { from: '0x6a8878704e95f57a179f6a5e84142661c002bb54' }, function (err, res) {
        if (!err)
            console.log(res);
    }
);

hblockService.patients.call('0x6a8878704e95f57a179f6a5e84142661c002bb54',
    { from: '0x6a8878704e95f57a179f6a5e84142661c002bb54' }, function (err, res) {
        if (!err)
            console.log(res);
    }
);

// 0x6a8878704e95f57a179f6a5e84142661c002bb54 