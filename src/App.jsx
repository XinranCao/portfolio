import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Works from "./components/Work/Work";
import WorkLayout from "./components/Work/WorkLayout";
import ProjDearnborn from "./components/Work/Project/ProjDearborn";
// import ProjScheduler from "./Project/ProjScheduler";
// import ProjUCSF from "./Project/ProjUCSF";
// import ProjJiangWen from "./Project/ProjJiangWen";
// import ProjELO from "./Project/ProjELO";
import Footer from "./components/Footer/Footer";
import css from "./styles/app.module.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tab, setTab] = useState(0);

  const handleClickTab = (currTab) => {
    setTab(currTab);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header tab={tab} handleClickTab={handleClickTab} />
      <Routes>
        <Route path="/" element={<WorkLayout />}>
          <Route index element={<Works />} />
          <Route path="works/dearborn" element={<ProjDearnborn />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer />
      {isVisible && (
        <div
          id={css.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/back_to_top.png" alt="Back To Top" />
        </div>
      )}
    </div>
  );
};

export default App;
