import React, { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollTopBack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(top > 100); // Change the value based on when you want to show the button
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: "99",
            backgroundColor: "#29b6ec",
            color: "#fff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaAnglesUp />
        </button>
      )}
    </>
  );
};

export default ScrollTopBack;
