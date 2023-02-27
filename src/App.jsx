import React from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";
import UrlShortener from "./components/urlShortener";
import Statistics from "./components/statistics";
import Cta from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="container relative my-6 px-3 lg:mx-auto lg:px-[6rem]">
        <NavBar />
        <Main />
        <div className="relative">
          <UrlShortener />
        </div>
      </div>
      <div>
        <Statistics />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

export default App;
