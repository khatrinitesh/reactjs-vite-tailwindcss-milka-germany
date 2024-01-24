import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// BELOW COMPONENTS
import Header from "../components/header";
import BtnPrimary from "../components/BtnPrimary";
import Subtitle from "../components/SubTitle";
import Tabbed from "../components/Tabbed";
import HeaderSmall from "../components/HeaderSmall";
import ShareModal from "../components/ShareModal";
// BELOW IMAGE FILE
import IconTick from "../assets/img/icons/icon-tick.svg";

export default function Lyrics() {
  const [shareModal, setShareModal] = useState(false);
  const navigate = useNavigate();
  // const btnNext = () => {
  //   navigate("/player");
  // };

  const btnShareModal = () => {
    setShareModal(true);
  };

  const btnCloseHandle = () => {
    setShareModal(false);
  };

  return (
    <>
      {/* START >> HEADER */}
      <div className="lg:block hidden">
        <Header
          headTitle1="Zeit dich für deinen Songtexte zu "
          headTitle2="entscheiden."
        />
      </div>
      <div className="visible lg:hidden">
        <HeaderSmall />
      </div>
      {/* END >> HEADER */}

      {/* START >> MAIN CONTENT */}
      <div className="mainContent relative z-[9] h-[calc(100vh-310px)] mt-[100px] lg:mt-[0]">
        <div className="container mx-auto relative">
          <div className="max-w-[700px] mx-auto w-full h-full pb-[100px] px-[20px]">
            <h2 className="text-center my-[30px] headTitle text-white font-bold font-congenial text-[3.2733224222585924vh] block lg:hidden">
              Zeit dich für deinen Songtexte
              <br />
              zu entscheiden.
            </h2>
            <Tabbed />
            <div className="toolbar flex items-center justify-between mb-[30px] flex-col lg:flex-row">
              <span className="text-center lg:text-left text-[rgba(255,255,255,.5)] text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] block w-full lg:w-[60%] mb-[20px] lg:mb-0 font-congenialLight">
                Diese Songtexte wurde mit Hilfe von AI erstellt. AGB gelten.
              </span>
              <div className="">
                <button className="px-[30px] py-[10px] flex items-center justify-center bg-darkblue text-white rounded-[30px] shadow font-regular">
                  Alternative <br />
                  Songtext erstellen
                </button>
              </div>
            </div>
            <div className="radioBlockOption text-center mb-[20px] w-full">
              <Subtitle subtitle="Wähle eine Stimme" />
              <div className="flex items-center justify-center gap-[20px] mb-[30px]">
                <button className="active:bg-white active:text-darkblue px-[20px] lg:px-[50px] py-[10px] flex items-center justify-center bg-darkblue font-congenial text-white rounded-[30px] shadow font-regular">
                  Weiblich
                </button>
                <button className="active:bg-white active:text-darkblue px-[20px] lg:px-[50px] py-[10px] flex items-center justify-center bg-darkblue font-congenial text-white rounded-[30px] shadow font-regular">
                  Männlich
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BtnPrimary
                data="Erstelle"
                data2="meinen Song"
                icon={IconTick}
                onClick={btnShareModal}
              />
            </div>
          </div>
        </div>
      </div>
      {/* END >> MAIN CONTENT */}

      {shareModal && <ShareModal btnClose={btnCloseHandle} />}
    </>
  );
}
