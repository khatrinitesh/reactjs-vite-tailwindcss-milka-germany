import React from "react";
import { FaHeart } from "react-icons/fa6";

const PreLoading = () => {
  return (
    <>
      <div className="overlayPreloader absolute inset-[0] w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center text-white">
        <h1 className="text-white text-[2rem]">LOADING...</h1>
      </div>
    </>
  );
};

export default PreLoading;
