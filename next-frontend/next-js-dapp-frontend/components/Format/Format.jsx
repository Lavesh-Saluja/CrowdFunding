import React,{useState,createContext} from 'react'
import Header from './Header'
import themes from './themes'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';


 const App= createContext()
function Format({children}) {


const [theme,setTheme]= useState('light')
const changeTheme =()=> {
  setTheme(theme=="light"?"dark":"light");
}

  return (
    <App.Provider>
<ThemeProvider theme={themes[theme]}>
<FormatWrapper onClick={changeTheme}>
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