import React from "react";

function Cta() {
  return (
    <div className="relative top-[-100px] flex h-[180px] items-center justify-center bg-primary_dark_violet bg-boostMobile bg-cover lg:bg-boostDeskTop">
      <div className="container flex flex-col items-center justify-center gap-5 px-3">
        <h1 className="text-3xl font-bold text-white">
          Boost your links today
        </h1>
        <button
          type="button"
          className="rounded-full bg-primary_cyan px-8 py-2 text-base font-bold text-white hover:bg-hover"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Cta;
