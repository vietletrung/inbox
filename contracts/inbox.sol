//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract Inbox {
    string public message;
    constructor (string memory initialMessage) {
        message = initialMessage;        
    }
    
    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }
}