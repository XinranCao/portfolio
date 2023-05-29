import React, { useState } from "react";
import css from "./Project.module.scss";

const Project = ({ goBack }) => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        Dearborn
        <div onClick={goBack}>go back</div>
      </div>
    </section>
  );
};

export default Project;
