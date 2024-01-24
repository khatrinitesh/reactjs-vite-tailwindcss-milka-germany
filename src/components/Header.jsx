import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Sidebar from "./Sidebar";

export default function Header({ headTitle1, headTitle2, headTitle3 }) {
  return (
    <>
      <header className="container mx-auto flex items-center justify-center lg:justify-between p-[20px] md:p-[30px] z-[999] relative">
        <Link to="/" className="logoBlock max-w-[250px] block z-[99]">
          <img src={Logo} className="object-cover img-fluid imgLogo" />
        </Link>
        <div className="hidden lg:block summaryBlock py-[50px] text-center w-full">
          <h2 className="relative left-[-10%] headTitle text-[2.0833333333333335vw] font-congenial text-white font-bold text-center ">
            {headTitle1}
            <br />
            {headTitle2}
            <br />
            {headTitle3}
          </h2>
        </div>
        <Sidebar />
      </header>
    </>
  );
}
