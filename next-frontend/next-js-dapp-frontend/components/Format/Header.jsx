import React from "react";
import styled from "styled-components";
import { App } from "../Format/Format";
import { useContext } from "react";
import Wallet from "./Wallet";
import { Router } from "next/router";
import Link from "next/link";
// import ResponsiveAppBar from "./Navbar";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <h1>CrowdFunding</h1>
        <Wallet />
        <Link href={"/"}>
          <NavigationLinks active={Router.pathname == "/" ? true : false}>
            Organization
          </NavigationLinks>
        </Link>
        <Link href={"/createProject"}>
          <NavigationLinks
            active={Router.pathname == "/createProject" ? true : false}
          >
            Create Organization
          </NavigationLinks>
        </Link>
        <Link href={"/dashboard"}>
          <NavigationLinks
            active={Router.pathname == "/dashboard" ? true : false}
          >
            Dashboard
          </NavigationLinks>
        </Link>

        {/* <ResponsiveAppBar /> */}
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  
 `;

const NavigationLinks = styled.div`
  
`;

