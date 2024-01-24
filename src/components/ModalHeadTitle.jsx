import React, { useEffect } from "react";
// BELOW LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";

const ModalHeadTitle = ({ style, data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <h2
        data-aos="fade-down"
        className={`${style} modalHeadTitle text-darkblue font-congenial font-bold text-[2.266847vh] lg:text-[1.25vw]`}
      >
        {data}
      </h2>
    </>
  );
};

export default ModalHeadTitle;
