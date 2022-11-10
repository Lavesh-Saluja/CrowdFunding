import Format from "../components/Format/Format.jsx"

function MyApp({ Component, pageProps }) {
 
  return(
    
    <Format>
    <Component {...pageProps} />
    </Format>)
}

export default MyApp
