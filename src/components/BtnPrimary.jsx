import React from "react";

const BtnPrimary = ({ style, data, data2, icon, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${style} text-[2.2913256955810146vh] lg:text-[0.9375vw] leading-[18px] relative items-center justify-center btnPrimary font-congenial font-semibold tracking-[1px] text-white bg-cyan rounded-[30px] px-[10px] lg:px-[30px] py-[15px] lg:py-[15px] w-[250px] flex text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
      >
        {data}
        <br />
        {data2}
        <span className="icon absolute top-[50%] translate-y-[-50%] right-[20px]">
          <img src={icon} alt="" className="max-w-[15px]" />
        </span>
      </button>
    </>
  );
};

export default BtnPrimary;
