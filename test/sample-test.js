const { expect } = require("chai");
const { ethers } = require("hardhat");

let greeterContract;
let callGreeterContract;
const provider = ethers.getDefaultProvider('rinkeby')


const convertHex = (_hex) => {
  const hex = _hex.toString();
  let str = '';
  for(let i=0; i<hex.length; i+=2 ) {
    str += String.fromCharCode(parseInt(hex.substr(i,2), 16));
  }
  return str
}

it('vault', async () => {
  const contractAddr = '0x239eB11241e8d1DAF546de8f5f7d451BBe2FdA88';
  const pass = await provider.getStorageAt(contractAddr, 1);
  console.log('Password ===>>>',pass)

  const res = convertHex(pass)
  console.log('res', res)
})


// addr: 0x239eB11241e8d1DAF546de8f5f7d451BBe2FdA88