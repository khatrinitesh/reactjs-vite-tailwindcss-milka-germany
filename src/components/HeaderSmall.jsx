import React from "react";
import { Link } from "react-router-dom";

// BELOW IMAGE FILE
import LogoSmall from "../assets/img/logosmall.png";
// BELOW COMPONENTS
import Sidebar from "./Sidebar";

export default function HeaderSmall() {
  return (
    <>
      <header className="headerSmall bg-darkblue relative z-[999] p-[20px] block lg:hidden stickyHeader">
        <Link to="/" className="flex items-center justify-center">
          <img src={LogoSmall} className="max-w-[100px]" />
        </Link>
      </header>
      <Sidebar />
    </>
  );
}
