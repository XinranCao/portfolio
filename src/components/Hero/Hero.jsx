import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* <img alt="picture of Xinran" src="../../../public/person.png" /> */}
        <div className={css.rightContent}>
          <div class={css.role}>
            <span class={css.part} id={css.user_experience}>
              User Experience
            </span>
            <span class={css.part} id={css.designer}>
              Designer
            </span>
            <span id={css.plus}>+</span>
            <span class={css.part} id={css.front_end}>
              Front-End
            </span>
            <span class={css.part} id={css.engineer}>
              Engineer
            </span>
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
