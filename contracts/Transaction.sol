// SPDX-License-Identifier: MIT
pragma solidity 0.5.15;

contract MyContract {    
    mapping(string => string) public values;
    constructor() public {
   values["session_date"] = "";
   values["session_time"] = "";
   values["wallet_address"] = "";
   values["id_type"] = "";
   values["notary_name"] = "";
   values["notary_badgeNumber"] = "";
   values["document_type"] = "";
    }
    function setValues(string memory _date, string memory _time, string memory _address, string memory _id, string memory _notary,
     string memory _badge, string memory _doc) public
{
     values["session_date"] = _date;
   values["session_time"] = _time;
   values["wallet_address"] = _address;
   values["id_type"] = _id;
   values["notary_name"] = _notary;
   values["notary_badgeNumber"] = _badge;
   values["document_type"] = _doc;
}
}