import { MoralisProvider } from "react-moralis"
import { ConnectButton,NotificationProvider} from "web3uikit";
import React,{useState} from "react";
import Forms from "../components/Format/Forms.jsx"
import Tables from "../components/Format/Tables.jsx"
export default function Home() {
  // string title,
  // uint requiredAmount,
  // address indexed owner,
  // address campaignAddress,
  // string imgUri,
  // uint indexed timestamp,
  // string  indexed category

const [title,setTitle]=useState();



  function inputEvent(event) {
    setTitle(event.target.value);
    const val=event.target.value;
  }
 


  return (
   
            <div className="flex">
            <div className="w-[100vw] h-[10vh] bg-blue-600">
              <h1 className="text-white">CROWD FUNDING</h1>
            </div>
              {/* <Forms /> */}
                <h1>{title}</h1>
                {/* <Tables /> */}
                
            </div>
  )
}
