
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import { MoralisProvider } from "react-moralis";

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
        
          <Header/>
    </MoralisProvider>
           
            
  )
}
