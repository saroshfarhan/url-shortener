import React from "react";
import brandRec from "../assets/icon-brand-recognition.svg";
import detailRec from "../assets/icon-detailed-records.svg";
import fullCust from "../assets/icon-fully-customizable.svg";

const stats = [
  {
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    img: brandRec,
  },
  {
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    img: detailRec,
  },
  {
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    img: fullCust,
  },
];

function Statistics() {
  const renderStats = stats.map((stat, index) => {
    return (
      <div key={index}>
        <img src={stat.img} alt={stat.title} />
        <h1>{stat.title}</h1>
        <h2>{stat.desc}</h2>
      </div>
    );
  });

  return (
    <div className="relative top-[-100px] z-[-10] bg-neutral_grayish_violet bg-opacity-30">
      <div className="container px-3 pb-[5rem] pt-[75px]">
        <div id="shortLinks" className="hidden">
          <h1>shortened links</h1>
          <h1>shortened links</h1>
          <h1>shortened links</h1>
          <h1>Statistics</h1>
          <h1>Statistics</h1>
          <h1>Statistics</h1>
        </div>
        <div id="statistics" className="mt-[6rem]">
          <h1 className="text-center text-3xl font-bold text-neutral_very_dark_blue">
            Advanced Statistics
          </h1>
          <h2 className="mt-4 text-center text-sm font-light text-neutral_grayish_violet">
            Track how your links are performing across the web with{" "}
            <br className="hidden lg:block" /> our advanced statistics
            dashboard.
          </h2>
          {renderStats}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
