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
      <>
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center rounded-lg bg-white p-6 lg:items-start ${
            index === 1 ? "lg:mt-6" : index === 2 ? "lg:mt-14" : "lg:mt-0"
          }`}
        >
          <div className="absolute top-[-1.7rem] inline-flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-primary_dark_violet">
            <img src={stat.img} alt={stat.title} className="w-[1.6rem]" />
          </div>

          <h1 className="text-center text-xl font-semibold text-neutral_very_dark_violet lg:text-left">
            {stat.title}
          </h1>
          <h2 className="mt-2 text-center text-sm text-neutral_grayish_violet lg:text-left">
            {stat.desc}
          </h2>
        </div>
      </>
    );
  });

  return (
    <div className="z-[-10] bg-primary_dark_violet bg-opacity-5">
      <div className="container px-3 pb-[5rem] pt-[75px] lg:px-[6rem]">
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
          <div className="mt-16 flex flex-col gap-10  lg:flex-row lg:items-start lg:justify-between">
            {renderStats}
          </div>
          <div className="relative top-[-20rem] z-[-10] h-[.4rem] rotate-90 bg-primary_cyan md:top-[-16rem] md:left-[9.5rem] md:w-[400px] lg:top-[-10rem] lg:left-0 lg:z-[-10] lg:h-[.4rem] lg:w-full lg:rotate-0 xl:w-[950px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
