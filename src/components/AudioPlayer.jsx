import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

// BELOW IMAGE FILE
import IconPlay from "../assets/img/icons/icon-white-play.svg";
import IconPause from "../assets/img/icons/icon-white-pause.svg";
import CoverAudio from "../assets/img/audiocover.png";

export default function AudioPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="coverBlock relative cursor-pointer mb-[10px] lg:mb-[20px]">
        <div className="overlay absolute w-full h-full inset-[0] shadow-[4px_8px_16px_-8px_rgba(20,2,0,1)] bg-[rgba(0,0,0,.5)]">
          <ReactPlayer url={audioUrl} playing={isPlaying} controls={false} />
        </div>
        <img src={CoverAudio} alt="" className="max-w-full object-cover" />
        <button
          className="absolute inset-[0] w-full h-full z-[999] text-white items-center justify-center flex"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <img
              src={IconPause}
              alt="Pause"
              className="w-[80px] h-[80px] aspect-square"
            />
          ) : (
            <img
              src={IconPlay}
              alt="Play"
              className="w-[80px] h-[80px] aspect-square"
            />
          )}
        </button>
      </div>
    </>
  );
}
