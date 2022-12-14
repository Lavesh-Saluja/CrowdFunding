
import React,{useState} from "react";
import Image from "next/image";
import ProjectFactory from "../artifacts/contracts/Projects.sol/ProjectFactory.json"

export default function Home() {
  





  return (
   <>

<div className="card" style={{height:"40%", width:"40%"}}>


<div  className="image" style={{height:"50%",width:"100%"}}>
<img src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?b=1&s=170667a&w=0&k=20&c=rR8QkCJuP2rRLXgDHwHwgZGtqHDFf4WFhIz_FpB9IRs="/>
</div>
  
<div className="title">
title

</div>
<div className=" owner">owner = 0xa23213e</div>
<div className="amount">
amount

</div>
<button>go to campaign</button>

</div>

   </>
            
  )
}

export async function getStaticProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );

  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_ADDRESS,
    CampaignFactory.abi,
    provider
  );

  const getAllCampaigns = contract.filters.campaignCreated();
  const AllCampaigns = await contract.queryFilter(getAllCampaigns);
  const AllData = AllCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress
    }
  });
}