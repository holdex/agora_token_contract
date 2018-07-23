pragma solidity ^0.4.24;


import "../node_modules/zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";


contract Token is DetailedERC20, StandardToken, BurnableToken {
	constructor (uint256 _totalSupply, string _name, string _symbol, uint8 _decimals) DetailedERC20(_name, _symbol, _decimals) public {
		totalSupply_ = _totalSupply;
		balances[msg.sender] = _totalSupply;
	}
}
