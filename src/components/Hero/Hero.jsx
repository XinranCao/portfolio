import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* <img alt="picture of Xinran" src="../../../public/person.png" /> */}
        <div className={css.rightContent}>
          <div class={css.role}>
            <div className="secondaryText" id={css.uxd_text}>
              User Experience Designer
            </div>
            <div className="secondaryText" id={css.fed_text}>
              Front-End Developer
            </div>
            <div className="secondaryText" id={css.uxe_text}>
              User Experience Engineer
            </div>
            <div className="secondaryText" id={css.plux_text}>
              +
            </div>
          </div>

          <div className={css.introduction}>
            My passion lies in bridging the gap between innovative UX design and
            robust front-end development. I design user-centered solutions and
            bring them to life, ensuring functionality, feasibility, and
            efficiency.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
