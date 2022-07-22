const { expect } = require("chai");
const { ethers } = require("hardhat");

let contract;

it('deploy', async () => {

  const Contract = await ethers.getContractFactory('Greeter');
  contract = await Contract.deploy();
  await contract.deployed();
  console.log('Contract address ===>', contract.address);

  // const myContract = await ethers.getContractAt('Greeter', contract.address);
  // console.log(myContract)
})

// it('set message', async () => {

//   // console.log(await contract.message())
//   // await contract.setMessage('Luna')
//   // console.log(await contract.message())

//   console.log('This is the owner ===>>',await contract.owner())

// })
const provider = ethers.getDefaultProvider()

it('msg-sender', async () => {

  const ownerOfContract = await contract.owner();
  console.log('Owner', ownerOfContract);
  
  // const res = await contract.msgSender();
  // console.log('Msg sender', res.from);

  const [owner, addr1] = await ethers.getSigners();
  console.log('Two addresses', owner.address, addr1.address);

  const contributionOfOwner = await contract.getContribution();
  console.log('contributionOfOwner', contributionOfOwner);

  const balance = await provider.getBalance(contract.address);
  console.log('bal of contract', balance)

  await contract.connect(addr1).contribute({ value: ethers.utils.parseEther('0.0001') });

  const tx = await addr1.sendTransaction({
    to: contract.address,
    value: ethers.utils.parseEther('1'),
    gasLimit: 300000
  })

  const newBalance = await provider.getBalance(contract.address);
  console.log('new bal of contract', newBalance)

  // await contract.connect(owner).contribute({ value: ethers.utils.parseEther('0.1') });

  const newOwnerOfContract = await contract.owner();
  console.log('Owner', newOwnerOfContract);



  // const res = await contract.connect(addr1).contribute({ value: ethers.utils.parseEther('0.0001') });
  // console.log(res);

  // const newOwnerOfContract = await contract.owner();
  // console.log('new Owner', newOwnerOfContract);
})
1000