//SPDX-License-Identifier:MIT

pragma solidity ^0.8.10;



contract ProjectFactory{
 address[] public deployedProjects;

 event CreatingProject__CrowdFunding(
     string title,
     uint requiredAmount,
     address indexed owner,
     address campaignAddress,
     string imgUri,
     uint indexed timestamp,
     string  indexed category
 );


function createProject(
string memory _title, 
uint _requiredAmount, string memory imgUri, 
string memory _ideaUri, string memory _category ) public{

    Project newProject = new Project(_title,_requiredAmount, _imgUri , _ideaUri);
    deployedProjects.push(address(newProject));

emit CreatingProject__CrowdFunding(_title,_requiredAmount,msg.sender,address(newProject),_imgUri,block.timestamp, _category);


}



}





contract Project{
string public title;
uint public requiredAmount;
string public image;
string public idea;
address payable public  creater;
uint public receivedAmount;


event donated__crowdfunding( address indexed donor, uint indexed amount, uint indexed timestamp);





constructor( string memory _title, uint _requiredAmount, string memory _imgUri, string memory _ideaUri){
title =_title;
requiredAmount= _requiredAmount;
image=_imgUri;
idea=_ideaUri;
creater= payable(msg.sender);
}  


function donate() public payable{
require(requiredAmount > receivedAmount ,"requirement already satisfied");
creater.transfer(msg.value);
receivedAmount += msg.value;
emit donated__crowdfunding(msg.sender, msg.value, block.timestamp);

}

}