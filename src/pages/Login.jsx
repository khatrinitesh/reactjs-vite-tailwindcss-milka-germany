import React from "react";
import { useNavigate } from "react-router-dom";

// BELOW COMPONENTS
import Header from "../components/header";
import BtnPrimary from "../components/BtnPrimary";
import SliderCarousel from "../components/SliderCarousel";
// BELOW IMAGE FILE
import IconMusic from "../assets/img/icons/icon-white-music.svg";

export default function Login() {
  const navigate = useNavigate();
  const btnNext = () => {
    navigate("/formpage");
  };
  return (
    <>
      {/* START >> HEADER */}
      <Header
        headTitle1="Wähle eine Botschaft"
        headTitle2="und erstelle deinen persönlichen"
        headTitle3="AI-Song"
      />
      {/* END >> HEADER */}

      {/* START >> MAIN CONTENT */}
      <div className="mainContent relative z-[9] h-[calc(100vh-340px)]">
        <div className="container mx-auto relative">
          <div className="md:max-w-[500px] lg:max-w-[800px] mx-auto w-full h-full pb-[100px]">
            <h2 className="text-center my-[30px] headTitle text-white font-bold font-congenial text-[3.2733224222585924vh] block lg:hidden">
              Wir helfen dir,
              <br />
              die richtigen Worte
              <br />
              zu finden.
            </h2>
            <div className="flex items-center justify-center text-center flex-col">
              <SliderCarousel />
              <div className="flex items-center justify-center mt-[100px]">
                <BtnPrimary
                  data="Los geht's"
                  icon={IconMusic}
                  onClick={btnNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END >> MAIN CONTENT */}
    </>
  );
}
