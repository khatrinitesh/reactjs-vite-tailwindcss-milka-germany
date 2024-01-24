import React from "react";
import { useNavigate } from "react-router-dom";

// BELOW COMPONENTS
import Header from "../components/header";
import SubTitle from "../components/SubTitle";
import InputField from "../components/InputField";
import BtnPrimary from "../components/BtnPrimary";
import SliderCarousel from "../components/SliderCarousel";
// BELOW IMAGE FILE
import IconTick from "../assets/img/icons/icon-tick.svg";

const Register = () => {
  const navigate = useNavigate();
  const btnNext = () => {
    navigate("/login");
  };
  return (
    <>
      {/* START >> HEADER */}
      <Header
        headTitle1="Wir helfen dir,"
        headTitle2="die richtigen Worte zu finden"
      />
      {/* END >> HEADER */}

      {/* START >> MAIN CONTENT */}
      <div className="mainContent relative z-[9] h-[calc(100vh-280px)]">
        <div className="container mx-auto relative">
          <div className="md:max-w-[500px] lg:max-w-[800px] mx-auto w-full h-full pb-[100px]">
            <h2 className="text-center my-[30px] headTitle text-white font-bold font-congenial text-[3.2733224222585924vh] block lg:hidden">
              Wir helfen dir,
              <br />
              die richtigen Worte
              <br />
              zu finden.
            </h2>
            <SliderCarousel />
            <div className="formRegister max-w-[600px] px-[20px] lg:px-[0] mx-auto w-full items-center justify-center flex-col">
              <div className="flex items-center justify-center text-center flex-col">
                <SubTitle subtitle="Erzähl uns etwas über dich" />
                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[20px] lg:gap-[50px] mb-[20px]">
                  <div className="fieldGroup w-full">
                    <InputField
                      style="active:bg-darkblue active:text-white w-full form-control p-[10px] h-[45px] border-[1px] border-solid border-white text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] text-white rounded-[15px] bg-[rgba(255,255,255,.1)] outline-none font-congenialLight"
                      placeholder="Wie lautet dein Name?"
                    />
                  </div>
                  <div className="fieldGroup w-full">
                    <InputField
                      style=" w-full form-control p-[10px] h-[45px] border-[1px] border-solid border-white text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] text-white rounded-[15px] bg-[rgba(255,255,255,.1)] outline-none font-congenialLight"
                      placeholder="Wie lautet dein Name?"
                    />
                  </div>
                </div>
                <div className="checkbox_block !max-w-full my-[20px] w-full !mb-[40px]">
                  <ul className="list-unstyled list_checkbox text-left w-full">
                    <li>
                      <label className="field_chk">
                        <input
                          type="checkbox"
                          name="condition1"
                          className="field_input_chk"
                          id="condition1"
                        />
                        <span className="dot_chk" />
                        <span className="txt_chk">
                          Ich akzeptiere die Geschäftsbedingungen und
                          Datenschutzrichtlinien von Mondelez (Milka)
                        </span>
                      </label>
                      <span className="labelError checkbox" />
                    </li>
                    <li>
                      <label className="field_chk">
                        <input
                          type="checkbox"
                          name="condition2"
                          className="field_input_chk"
                          id="condition2"
                        />
                        <span className="dot_chk" />
                        <span className="txt_chk">
                          Ich möchte über Angebote und Produkte von Mondelez
                          (Milka) informiert werden.
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <BtnPrimary data="Senden" icon={IconTick} onClick={btnNext} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END >> MAIN CONTENT */}
    </>
  );
};

export default Register;
