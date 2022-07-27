const { expect } = require("chai");
const { ethers } = require("hardhat");

let contract;
const provider = ethers.getDefaultProvider()

it('deploy', async () => {

  const Contract = await ethers.getContractFactory('Greeter');
  contract = await Contract.deploy();
  await contract.deployed();
  console.log('Address', contract.address);

})

// it('owner', async () => {
//   const owner = await contract.owner()
//   console.log('Owner', owner);
// })

it('change-owner',  async () => {
  const [addr1, addr2] = await ethers.getSigners();
  // console.log('Two addresses', addr1.address, addr2.address);

  const bal = await provider.getBalance(addr1.address);
  // console.log('bal',bal)

  await contract.Fal1out({ value: ethers.utils.parseEther('0.000000001') })

  const owner = await contract.owner()
  console.log('Owner', owner);
})