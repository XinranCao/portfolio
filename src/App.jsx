import React, { useState } from "react";
import Header from "./components/Header/Header";
import Works from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import css from "./styles/app.module.scss";

const App = () => {
  const [tab, setTab] = useState(0);
  const handleClickTab = (currTab) => {
    setTab(currTab);
  };

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header tab={tab} handleClickTab={handleClickTab} />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
