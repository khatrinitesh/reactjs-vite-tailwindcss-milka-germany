import React from "react";

const SubTitle = ({ style, subtitle, subtitle2, subtitle3 }) => {
  return (
    <>
      <h3
        className={`${style} subtitle leading-[30px] lg:leading-[40px] text-white font-bold font-congenial text-[2.9459901800327333vh] lg:text-[1.7569546120058566vw] font-regular`}
      >
        {subtitle} <br /> {subtitle2} <br /> {subtitle3}
      </h3>
    </>
  );
};

export default SubTitle;
