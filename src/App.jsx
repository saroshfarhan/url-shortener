import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import Main from "./components/main";
import UrlShortener from "./components/urlShortener";
import Statistics from "./components/statistics";
import Cta from "./components/cta";
import Footer from "./components/footer";

function App() {
  const [urls, setUrls] = useState([]);
  const handleClick = async (url) => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setUrls((prevUrls) => {
        if (prevUrls.length === 0) {
          return [
            {
              org: url,
              short: response.data.result.full_short_link,
              copied: false,
            },
          ];
        } else {
          return [
            {
              org: url,
              short: response.data.result.full_short_link,
              copied: false,
            },
            ...prevUrls,
          ];
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCopyText = (id) => {
    setUrls((prevUrls) =>
      prevUrls.map((url, index) => {
        return index === id
          ? { ...url, copied: true }
          : { ...url, copied: false };
      })
    );
  };
  console.log(urls);
  return (
    <div>
      <div className="container relative my-6 px-3 lg:mx-auto lg:px-[6rem]">
        <NavBar />
        <Main />
        <div className="relative">
          <UrlShortener handleClick={handleClick} />
        </div>
      </div>
      <div>
        <Statistics urlData={urls} handleCopyText={handleCopyText} />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

export default App;
