import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import BtnPrimary from "../components/BtnPrimary";
import Subtitle from "../components/SubTitle";
import HeaderSmall from "../components/HeaderSmall";

// BELOW IMAGE FILE
import IconMusic from "../assets/img/icons/icon-white-music.svg";
import IconShare from "../assets/img/icons/icon-white-share.svg";
import IconDownload from "../assets/img/icons/icon-white-download.svg";
import AudioPlayer from "../components/AudioPlayer";

export default function Player() {
  const audioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <>
      {/* START >> HEADER */}
      <div className="lg:block hidden">
        <Header headTitle1="Dein persönlicher Song" headTitle2="ist fertig." />
      </div>
      <div className="visible lg:hidden">
        <HeaderSmall />
      </div>
      {/* END >> HEADER */}

      {/* START >> MAIN CONTENT */}
      <div className="mainContent relative z-[9] lg:h-[calc(100vh-310px)] mt-[100px] lg:mt-[0]">
        <div className="container mx-auto relative">
          <div className="lg:max-w-[900px] mx-auto w-full h-full pb-[100px]">
            <div className="w-full h-[calc(100vh-75px)] lg:h-[calc(100vh-260px)] flex items-center justify-center gap-[20px] flex-col lg:flex-row">
              <div className="audioPlayer max-w-[280px] lg:max-w-[400px] overflow-hidden">
                <AudioPlayer audioUrl={audioUrl} />
                <div className="flex items-center justify-center">
                  <span className="txtDesc text-center lg:text-left text-[rgba(255,255,255,.5)] text-[1.733477789815818vh] lg:text-[0.8333333333333334vw] font-congenial font-light">
                    Diese Song wurde mit Hilfe von AI erstellt. AGB gelten.
                  </span>
                </div>
              </div>
              <div className="captionBlock grid grid-cols-3">
                <div className="col-span-12">
                  <Subtitle
                    subtitle="Sag's jetzt"
                    subtitle2="mit einem Song."
                  />
                </div>
                <div className="audioToolbar  col-span-12 flex items-center gap-[10px] my-[20px]">
                  <button className="active:bg-white px-[50px] py-[10px] flex items-center justify-center bg-darkblue font-congenial text-white rounded-[30px] shadow font-extrabold text-[1.733477789815818vh] lg:text-[1.0248901903367496vw]">
                    Persönlicher Code
                  </button>
                  <ul className="list-none m-0 flex items-center gap-[10px]">
                    <li>
                      <a
                        href="javascript:void()"
                        className="w-[40px] h-[40px] flex items-center justify-center bg-darkblue font-congenial text-white rounded-[50%] shadow"
                      >
                        <img
                          src={IconShare}
                          alt=""
                          className="max-w-full w-[15px]"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void()"
                        className="w-[40px] h-[40px] flex items-center justify-center bg-darkblue font-congenial text-white rounded-[50%] shadow"
                      >
                        <img
                          src={IconDownload}
                          alt=""
                          className="max-w-full w-[15px]"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 btnElement">
                  <BtnPrimary
                    style="w-full"
                    data="Erneut Erstellen"
                    icon={IconMusic}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
