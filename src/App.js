import React, { useEffect } from "react";
import emergence from "emergence.js";

import "./sass/main.scss";

import Home from "./components/home";

function App() {
  useEffect(() => {
    emergence.init({
      reset: false,
      handheld: true
    });
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
