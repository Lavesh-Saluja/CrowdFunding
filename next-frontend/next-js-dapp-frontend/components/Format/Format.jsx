import React from 'react'
import Header from './Header'
import themes from './themes'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {useState,createContext} from 'react'
import {ToastCointainer }from 'react-toastify'
// import  'react-toastify/dist/react-toastify'


 const App= createContext()
function Format({children}) {


const [theme,setTheme]= useState('defaultTheme')


  return (
    <App.Provider value={theme} >
<ThemeProvider theme={themes[theme]}>
<ToastCointainer/>
<FormatWrapper >
<GlobalStyle/>
    <div>
    <Header/>
    {children}
    {/* <div>
    Format
    </div> */}
    </div>
    </FormatWrapper>
    </ThemeProvider>
    </App.Provider>
  )
}

const GlobalStyle = createGlobalStyle`
body{

  margin:0;
  padding:0;
  overflow-x:hidden;
}
`


const FormatWrapper= styled.div`
min-height:100vh;
background-color: ${(props)=>props.theme.bgColor};
background-image:${(props)=>props.theme.bgImg};
color: ${(props)=>props.theme.color};



`

export default Format
export{App}