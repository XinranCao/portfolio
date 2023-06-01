import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* <a href="https://www.freepik.com/free-vector/process-concept-illustration_11434267.htm#page=9&query=user%20experience%20engineer%20illustration&position=19&from_view=search&track=ais">Image by storyset</a> on Freepik */}
        <img alt="UX Process" src="/ux_process.png" />

        <div className={`primaryText ${css.greeting}`}>Hi, I'm Xinran!</div>

        <div className={css.role}>
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
    </section>
  );
};

export default Hero;
