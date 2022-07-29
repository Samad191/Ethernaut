// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeter {
  bool public locked;
  string private password;

  constructor(string memory _password) public {
    locked = true;
    password = _password;
  }

  function unlock(string memory _password) public {
    if (keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked(_password))) {
      locked = false;
    }
  }
}
