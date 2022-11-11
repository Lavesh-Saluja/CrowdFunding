import React, { useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'







function Wallet() {
    const networks={
        goerli:{
            chainId: `0x${Number(5).toString(16)}`,
          chainName:"goerli Testnet",
          nativeCurrency:{
             name: "ETHEREUM",
             symbol:"ETH",},
          rpcUrl:["https://rpc.goerli.mudit.blog/"],
          blockExplorers:["https://goerli.etherscan.io/"]},
      }
      const[address,setAddress]= useState("")
      const [msg,setMsg]=useState("")
      const [balance,setBalance]=useState("")
    
    const connectWallet= async()=>{
        if( typeof window.ethereum !== "undefined" ){
            try {
                // await window.ethereum.request({method:"eth_requestAccountd"})
                // const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
                // const accounts=  provider.getSigner();
                // const signer = await accounts.getAddress()
                // setAddress(signer)

                const provider = new ethers.providers.Web3Provider(window.ethereum)

                
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner()
                const signeraddress=await signer.getAddress()
                 const bal= ethers.utils.formatEther( await signer.getBalance())
                setAddress(signeraddress)
                setBalance(bal)
            
            } catch (error) {
                console.log(error)
            }
    
    }
    else{
    setAddress("Please install metamask")

    }

}
  return (

    <div> <button onClick={connectWallet}>Wallet{address.slice(0,6)}...</button>
    <div>your current balance is {balance}</div>
    </div>
  )
}

export default Wallet