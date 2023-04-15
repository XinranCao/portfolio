import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}></div>
    </section>
  );
};

export default Hero;
