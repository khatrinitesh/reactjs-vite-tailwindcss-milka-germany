import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// BELOW COMPONENT
import ModalHeadTitle from "./ModalHeadTitle";
import CouponCode from "./CouponCode";
import BtnPrimary from "./BtnPrimary";

// BELOW IMAGE FILE
import IconMusic from "../assets/img/icons/icon-white-music.svg";
import iconClose from "../assets/img/icons/icon-purple-close.svg";
// BELOW LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";

const ShareModal = ({ btnClose }) => {
  const navigate = useNavigate();

  const btnNext = () => {
    navigate("/player");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="fixed inset-[0] w-full h-full z-[999999] flex items-center flex-col justify-center">
        <div className="overlayShareModal fixed inset-[0] w-full h-full bg-darkblue opacity-95 z-[999999]"></div>
        <div className="shareModal fixed  w-full h-full   z-[999999] max-w-[350px] md:max-w-[400px] 2xl:max-w-[500px] flex items-center justify-center flex-col text-center">
          <div className="innerShareModal h-[300px] px-[50px] md:px-[80px] relative flex items-center justify-center flex-col">
            <button
              onClick={btnClose}
              className="absolute top-[0] md:top-[-20px] 2xl:top-[-50px] right-[50px] md:right-[70px]"
            >
              <img
                src={iconClose}
                className="absolute top-[30px] right-[0] max-w-[20px] mx-auto"
              />
            </button>
            <ModalHeadTitle
              style="mb-[20px]"
              data="You can share the song online or write the unique code below on the pack for your loved one."
            />
            <CouponCode />
          </div>
          <div className="relative bottom-[-100px]">
            <BtnPrimary
              data="Create Again"
              icon={IconMusic}
              onClick={btnNext}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
