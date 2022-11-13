const ProjectFactory = require("./artifacts/contracts/Projects.sol/ProjectFactory.json");
const Project = require("./artifacts/contracts/Projects.sol/Project.json");
const { ethers } = require("ethers");
require("dotenv").config({ path: "./.env.local" });

const main = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(
  //     process.env.NEXT_PUBLIC_RPC_URL
  //   );

  //   const contract = new ethers.Contract(
  //     process.env.NEXT_PUBLIC_ADDRESS,
  //     CampaignFactory.abi,
  //     provider
  //   );

  //   const getDeployedCampaign = contract.filters.campaignCreated(null,null,null,null,null,null,'Health');
  //   let events = await contract.queryFilter(getDeployedCampaign);
  //   let event = events.reverse();
  //   console.log(event);

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.GOERLI_RPC_URL
  );

  const contract = new ethers.Contract(
    process.env.CONTRACT_PUBLIC_ADDRESS,
    ProjectFactory.abi,
    provider
  );

  const DeployedProjects = contract.filters.CreatingProject__CrowdFunding();
  let events = await contract.queryFilter(DeployedProjects);

  events= events.reverse()

  console.log(events);

};

main();
