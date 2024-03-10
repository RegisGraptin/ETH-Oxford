// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CustomContract {

    // Minimum time access
    uint min_time_access = 1 days;

    // Index of project
    uint projectId;

    // Project Owner
    mapping (uint => address) owner;

    // Set project price
    mapping (uint => uint) prices;

    // Access time to the project
    mapping (uint => mapping (address => uint)) access_time;

    constructor() {}

    function create_dataset(uint price) external {
        owner[projectId] = msg.sender;
        prices[projectId] = price;
        projectId++;
    }

    function get_access(uint index) payable external {
        require(index < projectId, "INVALID_PROJECT"); 
        require(msg.value >= prices[index], "NOT_ENOUGH_FUND");

        // Paie the owner
        (bool success,) = payable(owner[index]).call{value: prices[index]}("");
        require(success);

        access_time[index][msg.sender] = block.timestamp + min_time_access;
    }

    function check_access(uint index) external view returns (bool) {
        return access_time[index][msg.sender] <= block.timestamp;
    }

}
