import React from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="container relative my-6 px-3 lg:mx-auto">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
