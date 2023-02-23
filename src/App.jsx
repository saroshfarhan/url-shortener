import React from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";
import UrlShortener from "./components/urlShortener";
import Statistics from "./components/statistics";
import Cta from "./components/cta";

function App() {
  return (
    <div>
      <div className="container relative my-6 px-3 lg:mx-auto">
        <NavBar />
        <Main />
        <div className="relative">
          <UrlShortener />
        </div>
      </div>
      <div>
        <Statistics />
        <Cta />
      </div>
    </div>
  );
}

export default App;
