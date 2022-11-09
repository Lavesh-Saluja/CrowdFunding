import React from 'react'
import {ConnectButton} from 'web3uikit'

export default function Header() {
  return (
    <>
    <header className="text-gray-600 body-font" >
  <div className=" ml-auto " >
    
    
    <ConnectButton moralisAuth= {false}/>
    
    
  </div>
</header>

    </>
  )
}
