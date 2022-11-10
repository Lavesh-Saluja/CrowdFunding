import React from 'react'
import Header from './Header'
import themes from './themes'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {useState,createContext} from 'react'

function Format({children}) {
const [theme,setTheme]= useState('defaultTheme')


  return (
<ThemeProvider theme={themes[theme]}>
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
  )
}

const GlobalStyle = createGlobalStyle`
body{

  margin:0;
  padding:0;
}
`


const FormatWrapper= styled.div`
min-height:100vh;
background-color: ${(props)=>props.theme.bgColor};
background-image:${(props)=>props.theme.bgImg};
color: ${(props)=>props.theme.color};


`

export default Format