import React from "react";
import styled from "styled-components";
import { App } from "../Format/Format";
import { useContext } from "react";
import Wallet from "./Wallet";
import { Router } from "next/router";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wallet />
        Header
        <Link href={"/"}>
          <NavigationLinks active={Router.pathname == "/" ? true : false}>
            link1
          </NavigationLinks>
        </Link>
        <Link href={"/createProject"}>
          <NavigationLinks
            active={Router.pathname == "/createProject" ? true : false}
          >
            Create Pitch
          </NavigationLinks>
        </Link>
        <Link href={"/dashboard"}>
          <NavigationLinks
            active={Router.pathname == "/dashboard" ? true : false}
          >
            Dashboard
          </NavigationLinks>
        </Link>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 2rem;
  border: 2px solid white;
  background-color: violet;
  display: flex;
  justify-content: space-between;
`;

const NavigationLinks = styled.div`
  background-color: black;
  color: white;
`;
