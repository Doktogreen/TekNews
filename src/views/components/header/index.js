import React, { Fragment } from "react";
import NavBar from "./navbar";
import TopBar from "./topbar";

export default function Header(){
    return(
        <Fragment>
            <TopBar />
            <NavBar />
        </Fragment>
    )
}