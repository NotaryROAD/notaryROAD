// SPDX-License-Identifier: MIT
pragma solidity 0.5.15;

contract MyContract {
    
    mapping(string => string) public values;
    constructor() public {
        values["brand"] = "Visa";
        values["country"] = "IN";
        values["expiry_month"] = "33";
        values["expiry_year"] = "2025";
        values["card_id"] = "287937973";
        values["last4digits"] = "4545";
        values["name"] = "anku";
        values["client_ip"] = "132.392";
        values["email"] = "ajisjio@ejpie";
    }
}