import React from "react";
import css from "./Works.module.scss";

const Works = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">
              My works
              <p style={{ marginTop: "1opx" }}>subheadings</p>
            </span>
          </div>
          <span className="secondaryText">Export More Works</span>
        </div>
      </div>
    </section>
  );
};
export default Works;
