import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import css from "./styles/app.module.scss";

const App = () => {
  const [tab, setTab] = useState(0);
  const handleClickTab = (currTab) => {
    setTab(currTab);
  };

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header tab={tab} handleClickTab={handleClickTab} />
      <Hero />
      <Works />
    </div>
  );
};

export default App;
