const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:30000/'));
console.log(web3);
var hblockContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"patients","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"grantAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addClinic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"records","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"doc","type":"address"}],"name":"addDoctor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"getRecord","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clinics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"},{"name":"hsh","type":"string"}],"name":"appendToRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"addPatient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"doctors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"forceGetRecord","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
var hblock = hblockContract.new(
   {
     from: "0xf95d5baa6454aa43fab2ec73b40c2938af45947a", 
     data: '0x6060604052341561000f57600080fd5b610d358061001e6000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630869cfbc146100b45780630ae5e73914610105578063381ad54f14610156578063469e90671461016b5780634780468f1461021d578063617fba0414610256578063646077511461030857806369a858a2146103595780636d263ceb146103ed578063a9583c2214610426578063c3f120a61461049f575b600080fd5b34156100bf57600080fd5b6100eb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610551565b604051808215151515815260200191505060405180910390f35b341561011057600080fd5b61013c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610571565b604051808215151515815260200191505060405180910390f35b341561016157600080fd5b610169610612565b005b341561017657600080fd5b6101a2600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061066c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e25780820151818401526020810190506101c7565b50505050905090810190601f16801561020f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561022857600080fd5b610254600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061071c565b005b341561026157600080fd5b61028d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061079d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102cd5780820151818401526020810190506102b2565b50505050905090810190601f1680156102fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561031357600080fd5b61033f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610998565b604051808215151515815260200191505060405180910390f35b341561036457600080fd5b6103d3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109b8565b604051808215151515815260200191505060405180910390f35b34156103f857600080fd5b610424600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a7c565b005b341561043157600080fd5b61045d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ad7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104aa57600080fd5b6104d6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b0a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105165780820151818401526020810190506104fb565b50505050905090810190601f1680156105435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b60008173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105b1576000905061060d565b60018060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600190505b919050565b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107145780601f106106e957610100808354040283529160200191610714565b820191906000526020600020905b8154815290600101906020018083116106f757829003601f168201915b505050505081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6107a5610c50565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060001515600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514156108b8576040805190810160405280600581526020017f6572726f720000000000000000000000000000000000000000000000000000008152509050610993565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561098b5780601f106109605761010080835404028352916020019161098b565b820191906000526020600020905b81548152906001019060200180831161096e57829003601f168201915b505050505090505b919050565b60036020528060005260406000206000915054906101000a900460ff1681565b600060011515600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415610a6c5781600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610a66929190610c64565b50610a75565b60009050610a76565b5b92915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b12610c50565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415610c4a57600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c3e5780601f10610c1357610100808354040283529160200191610c3e565b820191906000526020600020905b815481529060010190602001808311610c2157829003601f168201915b50505050509050610c4b565b5b919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ca557805160ff1916838001178555610cd3565b82800160010185558215610cd3579182015b82811115610cd2578251825591602001919060010190610cb7565b5b509050610ce09190610ce4565b5090565b610d0691905b80821115610d02576000816000905550600101610cea565b5090565b905600a165627a7a72305820033ba905074c69949c6c62187b3363b40207fd34c12501828a8920c8e95e46200029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

//0xcea6b1c4818e361d822cf31dd9eaa4b3b717d313 