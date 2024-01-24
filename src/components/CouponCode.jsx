import React from "react";
import InputField from "../components/InputField";

const CouponCode = () => {
  return (
    <>
      <InputField
        maxLength={5}
        placeholder="00000"
        style="text-center outline-none w-full form-control fieldControlOutline p-[10px] h-[50px] border-[1px] border-solid border-indigo text-[2.1668472372697725vh] lg:text-[1.25vw] text-darkblue placeholder:text-lightblue rounded-[15px] bg-transparent outline-none fieldControl font-congenialLight"
      />
    </>
  );
};

export default CouponCode;
