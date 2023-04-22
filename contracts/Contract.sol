// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ContractWinner{
    function attempt()external;
}

contract Contract {
    function doAttempt(address _address) public{
        ContractWinner(_address).attempt();
    }
}
