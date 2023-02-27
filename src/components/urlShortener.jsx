import React from "react";

function UrlShortener() {
  return (
    <div className="container absolute top-[-4rem] rounded-lg bg-primary_dark_violet bg-shortenMobile bg-cover lg:flex lg:h-[150px] lg:w-full lg:items-center lg:justify-center lg:bg-shortenDeskTop">
      <div className="flex flex-col gap-3 px-5 py-6 lg:w-full lg:flex-row lg:items-center lg:justify-evenly lg:gap-5 lg:px-16">
        <input
          type="text"
          name="longURL"
          placeholder="Shorten a link here..."
          className="rounded-lg py-3 px-5 lg:basis-3/4"
        />
        <button
          type="button"
          className="rounded-lg bg-primary_cyan px-8 py-3 text-base font-bold text-white hover:bg-hover lg:basis-1/4"
        >
          Shorten it!
        </button>
      </div>
    </div>
  );
}

export default UrlShortener;
