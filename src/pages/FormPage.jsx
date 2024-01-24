import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectDropdown from "../components/SelectDropdown";

// BELOW COMPONENTS
import Header from "../components/header";
import BtnPrimary from "../components/BtnPrimary";
import HeaderSmall from "../components/HeaderSmall";
import InputField from "../components/InputField";
// BELOW IMAGE FILE
import IconNext from "../assets/img/icons/icon-white-next.svg";
import IconHeart from "../assets/img/icons/icon-gray-heart.svg";

const FormPage = () => {
  const navigate = useNavigate();
  const btnNext = () => {
    navigate("/lyrics");
  };

  return (
    <>
      {/* START >> HEADER */}
      <div className="lg:block hidden">
        <Header
          headTitle1="Erzähl uns etwas über den "
          headTitle2="Empfänger des Songs,"
          headTitle3="um loszulegen. "
        />
      </div>
      <div className="visible lg:hidden">
        <HeaderSmall />
      </div>
      {/* END >> HEADER */}

      {/* START >> MAIN CONTENT */}
      <div className="mainContent relative z-[9] h-[calc(100vh-310px)] mt-[100px]  lg:mt-[0]">
        <div className="container mx-auto relative h-full">
          <div className="max-w-[350px] lg:max-w-[800px] mx-auto w-full h-auto px-[20px] pb-[50px]">
            <h2 className="text-center my-[30px] headTitle text-white font-bold font-congenial text-[3.2733224222585924vh] block lg:hidden w-full">
              Erzähl uns etwas über
              <br />
              den Empfänger des Songs, um
              <br />
              loszulegen.
            </h2>
            <div className="px-[20px] lg:px-[60px] py-[40px] lg:py-[30px] fillForm md:max-w-[360px] xl:max-w-[400px] h-auto w-full relative text-left  mx-auto">
              <div className="innerFill  z-[9999] relative h-auto w-full">
                <div className="heartBlock absolute top-[0] right-[0]">
                  <img
                    src={IconHeart}
                    alt=""
                    className="max-w-full w-[100px] block animateHeart"
                  />
                </div>
                <div className="fieldGroup w-full mb-[10px] md:mb-[10px] lg:mb-[30px] relative z-[999]">
                  <label className="fieldLbl text-darkblue font-bold font-congenial uppercase text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] mb-[10px] block px-[15px]">
                    Für wen ist der Song?
                  </label>
                  <InputField
                    placeholder="First name or Nickname"
                    style="outline-none w-full form-control fieldControlOutline p-[10px] h-[45px] border-[1px] border-solid border-indigo text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] text-darkblue placeholder:text-lightblue rounded-[10px] bg-transparent outline-none fieldControl font-congenialLight"
                  />
                </div>
                <div className="fieldGroup w-full mb-[10px] md:mb-[10px] lg:mb-[30px]">
                  <label className="fieldLbl text-darkblue font-bold font-congenial uppercase text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] mb-[10px] block px-[15px]">
                    Was sind seine / ihre präferierte Pronomen?
                  </label>
                  <SelectDropdown />
                </div>
                <div className="fieldGroup w-full mb-[10px] md:mb-[10px] lg:mb-[30px]">
                  <label className="fieldLbl text-darkblue font-bold font-congenial uppercase text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] mb-[10px] block px-[15px]">
                    Was sind seine / ihre präferierte Pronomen?
                  </label>
                  <SelectDropdown />
                </div>
              </div>
            </div>
            <div className="btnForm relative z-[999] flex items-center justify-center mt-[50px] ">
              <BtnPrimary data="Weiter" icon={IconNext} onClick={btnNext} />
            </div>
          </div>
        </div>
      </div>
      {/* END >> MAIN CONTENT */}
    </>
  );
};

export default FormPage;
