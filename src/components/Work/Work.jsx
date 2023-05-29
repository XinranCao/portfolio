import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Gallery from "./Gallery/Gallery";
import ProjDearnborn from "./Project/ProjDearborn";
import ProjScheduler from "./Project/ProjScheduler";
import ProjUCSF from "./Project/ProjUCSF";
import ProjJiangWen from "./Project/ProjJiangWen";
import ProjELO from "./Project/ProjELO";

const Works = () => {
  const [currProj, setCurrProj] = useState(-1);

  const projects = [
    <ProjDearnborn goBack={() => setCurrProj(-1)} />,
    <ProjScheduler goBack={() => setCurrProj(-1)} />,
    <ProjUCSF goBack={() => setCurrProj(-1)} />,
    <ProjJiangWen goBack={() => setCurrProj(-1)} />,
    <ProjELO goBack={() => setCurrProj(-1)} />,
  ];

  return (
    <>
      {currProj < 0 ? (
        <>
          <Hero />
          <Gallery goTo={(projId) => setCurrProj(projId)} />
        </>
      ) : (
        projects[currProj]
      )}
    </>
  );
};
export default Works;
