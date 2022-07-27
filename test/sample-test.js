const { expect } = require("chai");
const { ethers } = require("hardhat");

let greeterContract;
let callGreeterContract;
const provider = ethers.getDefaultProvider()


it('deploy', async () => {

  const Contract = await ethers.getContractFactory('Greeter');
  greeterContract = await Contract.deploy();
  await greeterContract.deployed();
  console.log('Address', greeterContract.address);

  const ContractCallGreeter = await ethers.getContractFactory('CallGreeter');
  callGreeterContract = await ContractCallGreeter.deploy();
  await callGreeterContract.deployed();

  console.log('Call greeter contract', callGreeterContract.address);

})


it('tx-origin', async () => {
  const owner = await greeterContract.owner();
  console.log('Owner ===>>', owner);

  const [addr1, addr2] = await ethers.getSigners();
  console.log('address',addr2.address)
  await callGreeterContract.callGreeter(greeterContract.address, addr2.address);

  const newOwner = await greeterContract.owner();
  console.log('Owner ===>>', newOwner);
})