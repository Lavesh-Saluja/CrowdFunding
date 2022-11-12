const hre= require("hardhat")

async function main(){

const ProjectFactory= await hre.ethers.getContractFactory("ProjectFactory")
const project_factory = await  ProjectFactory.deploy()
await project_factory.deployed()
console.log("Factory deplloyed to :",project_factory.address)
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // local contract address 0x5FbDB2315678afecb367f032d93F642f64180aa3==> on hardhat
  //  deploy address when deployed to goerli test net  0xC902e5363269f29Ec281afD1F7dfD463B886666A