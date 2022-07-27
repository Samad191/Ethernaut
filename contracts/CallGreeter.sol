import './Greeter.sol';

contract CallGreeter {

  function callGreeter(Greeter _greeterAddr, address _owner) public {
    _greeterAddr.changeOwner(_owner);
  }

}