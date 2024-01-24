import React, { useState, useEffect } from "react";
// BELOW COMPONENT
import SubTitle from "./SubTitle";
// BELOW LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";

const Tabbed = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="tabbedBlock mb-[15px] lg:mb-[30px]">
        <div className="mx-auto max-w-full lg:max-w-[500px] customTabs tabs flex items-center justify-center">
          <div
            className={`font-congenial tab w-full ${
              activeTab === "tab1" ? "active" : ""
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            VERSION 1
          </div>
          <div
            className={`tab w-full ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            VERSION 2
          </div>
          <div
            className={`tab w-full ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            VERSION 3
          </div>
        </div>
        <div className="tabContentBlock p-[20px] border-[1px] border-solid border-[#fff] rounded-[0 0 15px 15px] lg:rounded-[15px]">
          {activeTab === "tab1" && <TabContent1 />}
          {activeTab === "tab2" && <TabContent2 />}
          {activeTab === "tab3" && <TabContent3 />}
        </div>
      </div>
    </>
  );
};

export default Tabbed;

function TabContent1() {
  return (
    <>
      <div className="tabContent" data-aos="fade-up">
        <div className="customScrollbar innerTab h-[300px] max-h-full overflow-auto">
          <h3 className="text-white text-[24px] mb-[15px] font-bold">
            VERSION 1
          </h3>
          <p className="desc font-congenialLight">
            Happiness is two different things What you take and then what you
            bring One is pleasure, one's discipline One's devotion, one's just
            the ring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
        </div>
      </div>
    </>
  );
}
function TabContent2() {
  return (
    <>
      <div className="tabContent" data-aos="fade-up">
        <div className="customScrollbar innerTab h-[300px] max-h-full overflow-auto">
          <h3 className="text-white text-[24px] mb-[15px] font-bold">
            VERSION 2
          </h3>
          <p className="desc font-congenialLight">
            Happiness is two different things What you take and then what you
            bring One is pleasure, one's discipline One's devotion, one's just
            the ring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
        </div>
      </div>
    </>
  );
}
function TabContent3() {
  return (
    <>
      <div className="tabContent" data-aos="fade-up">
        <div className="customScrollbar innerTab h-[300px] max-h-full overflow-auto">
          <h3 className="text-white text-[24px] mb-[15px] font-bold">
            VERSION 3
          </h3>
          <p className="desc font-congenialLight">
            Happiness is two different things What you take and then what you
            bring One is pleasure, one's discipline One's devotion, one's just
            the ring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
          <p className="desc font-congenialLight">
            Desire and reward Long term and short term joy Happiness is two
            different things What you take and then what you bring
          </p>
        </div>
      </div>
    </>
  );
}
