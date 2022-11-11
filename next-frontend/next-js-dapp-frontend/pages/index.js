import { MoralisProvider } from "react-moralis"
import { ConnectButton } from "web3uikit"
export default function Home() {
  return (
   
            <div className="flex">
            <div className="w-[100vw] h-[10vh] bg-black">
              <h1 className="text-white">CROWD FUNDING</h1>
            </div>
              <MoralisProvider appID="">
              <ConnectButton />
              </MoralisProvider>
                
            </div>
  )
}
