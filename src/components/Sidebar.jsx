import React, { useState } from "react";
// BELOW IMAGES FILE
import Logo from "../assets/img/logo.png";
import IconHamburger from "../assets/img/icons/icon-white-hamburger.png";
import IconClose from "../assets/img/icons/icon-white-close.svg";
import IconMap from "../assets/img/icons/icon-purple-map.png";
import Mondelez from "../assets/img/logo-mondelez.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const btnHamburger = () => {
    setSidebar(true);
  };
  const btnClose = () => {
    setSidebar(false);
  };
  return (
    <>
      <div className="lg:hidden block">
        <button
          onClick={btnHamburger}
          className="btnHamburger fixed top-[30px] right-[30px] z-[999] "
        >
          <img
            src={IconHamburger}
            className="btnHamburger aspect-square w-[30px] h-[20px]"
          />
        </button>

        <div
          className={`rightSidebar w-full h-full fixed  bg-indigo z-[9999] ${
            sidebar ? "rightSidebarActive" : ""
          }`}
        >
          <div className="header relative">
            <div className="logoBlock my-[20px]">
              <img src={Logo} className="block mx-auto w-[250px]" />
            </div>
            <button
              onClick={btnClose}
              className="btnHamburger absolute top-[10px] right-[30px]"
            >
              <img
                src={IconClose}
                className="btnClose aspect-square w-[30px] h-[20px]"
              />
            </button>
          </div>
          <div className="mainSidebar h-[calc(100%-129px)]">
            <ul className="listItem px-[50px] m-0 items-start flex flex-col justify-center py-[50px]">
              <li className="mb-[20px]">
                <a
                  href=""
                  className="active flex items-center uppercase text-linkcolorsidebar font-congenial font-bold text-[2.9459901800327333vh]"
                >
                  <span className="icon w-[20px] me-[20px]">
                    <img src={IconMap} className="w-[20px]" />
                  </span>
                  <span className="txtLink">how to participate</span>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href=""
                  className="flex items-center uppercase text-linkcolorsidebar font-congenial font-bold text-[2.9459901800327333vh]"
                >
                  <span className="icon w-[20px] me-[20px]">
                    <img src={IconMap} className="w-[20px]" />
                  </span>
                  <span className="txtLink">View Message</span>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href=""
                  className="flex items-center uppercase text-linkcolorsidebar font-congenial font-bold text-[2.9459901800327333vh]"
                >
                  <span className="icon w-[20px] me-[20px]">
                    <img src={IconMap} className="w-[20px]" />
                  </span>
                  <span className="txtLink">Terms & Conditions</span>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href=""
                  className="flex items-center uppercase text-linkcolorsidebar font-congenial font-bold text-[2.9459901800327333vh]"
                >
                  <span className="icon w-[20px] me-[20px]">
                    <img src={IconMap} className="w-[20px]" />
                  </span>
                  <span className="txtLink">Privacy Policy</span>
                </a>
              </li>
              <li className="mb-[20px]">
                <a
                  href=""
                  className="flex items-center uppercase text-linkcolorsidebar font-congenial font-bold text-[2.9459901800327333vh]"
                >
                  <span className="icon w-[20px] me-[20px]">
                    <img src={IconMap} className="w-[20px]" />
                  </span>
                  <span className="txtLink">Contact Us</span>
                </a>
              </li>
            </ul>
            <div className="bg-[#58478c] w-full py-[20px] absolute left-[0] bottom-[0] items-center flex justify-center">
              <img src={Mondelez} className="max-w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
