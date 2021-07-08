// file tells truffle how 2 move the contract on the blockchain
const MemoryToken = artifacts.require("MemoryToken");

module.exports = function(deployer) {
  //deploy Token 2 db
    deployer.deploy(MemoryToken);
};
