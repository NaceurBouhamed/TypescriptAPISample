<p align="center">
  <img src="https://image.ibb.co/ikXea7/logo_edited.png?raw=true" height="160" width="160">
</p>

# H-Block  

H-Block is a sample distributed app based on Blockchain technology to maintain tamper-proof medical records. The project is still ongoing.

## Prerequisites
* Npm & Node
* Ganache-cli
* Web3 (0.20.0)
* MongoDB
* IPFS or IPFSmini
* Angular 4 or <

## Installation

* Install Ganache : `npm install -g ganache-cli`
* Clone the project : `git clone https://github.com/NaceurBouhamed/TypescriptAPISample.git`
* Install the package : `npm install`
* Install IPFS : Please refer to [this official docs of ipfs for smooth installation](https://ipfs.io/docs/install/)
* Install MongoDB: [Easy tutorial here](https://docs.mongodb.com/manual/installation/#tutorials), thank me later.
<p>Don't forget to set up your MongoDB & IPFS addresses.<br>Notice that most of the project is written on Typescript for easy development.</p>

## Running

You can start by deploying the smart contract using [deploySmartContract.js](https://github.com/NaceurBouhamed/TypescriptAPISample/blob/master/deploySmartContract.js "deploySmartContract.js"). Right now the smart contract is available on Ropsten test net right here : 
[0x2e4347836005cebeed350f0f11133d166c8eb236](https://ropsten.etherscan.io/address/0x2e4347836005cebeed350f0f11133d166c8eb236) <br>
* Simply deploy the smart contract by : `node deploySmartContract.js`
<p>The Smart contract has a total of 7 function :<br> <ul><li>addClinic(), addPatient(), addDoctor() : those for adding users to our blockchain</li><li>grantAccess() :  Sender allows access to his medical record to doctor.</li><li>getRecord(): Get record if allowed, of some patient</li><li>appendToRecord(): adding new prescription the record</li><li>forceGetRecord(): get record without checking permission under *emergency cases. (for clinics only)</li></ul></p>
The project exposes webservices to interact with the blockchain, but you can do that directly with web3.



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.


## License

#### Apache License 2.0
[More info](https://www.apache.org/licenses/LICENSE-2.0).
