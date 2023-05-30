import React, { useState } from "react";
import css from "./Project.module.scss";

const Project = ({ goBack }) => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div onClick={goBack} className={`secondaryText ${css.goBack}`}>
          ← &nbsp; Go back
        </div>
        <div className={css.content}>
          <img src="../../../public/dearborn.png" alt="project" />
          <div className={css.heading}>
            <div className={`primaryText  ${css.proj_title}`}>
              Permitting Better Permitting
            </div>
            <div className={`secondaryText  ${css.sub_title}`}>
              Citizen Interaction Design - Permit Application Process
            </div>
          </div>
          <div className={css.basicInfo}>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>Team</span>
              <span> Sreelakshmi Surabiyil Bindu </span>
              <span> Xinran Cao </span>
              <span> Yian Gong </span>
              <span> Xilei Liu </span>
              <span> Orville Mo-He Emilia Schneider</span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>My Role</span>
              <span> UX Researcher </span>
              <span> UX Designer</span>
              <span>Report Writer </span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>
                Timeline
              </span>

              <span> Jan 2023 - Apr 2023</span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>
                Discipline
              </span>
              <span> User Research </span>
              <span> Citizen Interaction Design </span>
              <span> UI/UX Design </span>
              <span> Prototyping Usability Testing </span>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Overview</span>
            <div
              className={`${css.section_content} ${css.horizontal}`}
              id={css.overview}
            >
              <div className={css.section_horizontal}>
                <div className={`secondaryText  ${css.infoTitle}`}>Client</div>
                <span>
                  The Economic Development Department of the City of Dearborn,
                  Michigan
                </span>
                <br />
                <p>
                  The Dearborn Economic Development Department is aiming to
                  streamline the permit application process by{" "}
                  <strong>digitizing</strong> it and collaborating with{" "}
                  <strong>Google</strong> to build a website. Our team has been
                  tasked with conducting user research and providing initial
                  solutions, which will serve as a foundation for the website
                  and permit application development process.
                </p>
              </div>
              <div className={css.section_horizontal}>
                <img
                  id={css.dac}
                  src="../../../public/dac.webp"
                  alt="Dearborn Administrative Center"
                />
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Design Thinking Process</span>
            <div className={css.section_content}>
              <img
                src="../../../public/design_thinking.png"
                alt="Design Thinking Process"
              />
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Empathize</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div id={css.client_meeting}>
                <div className={css.section_horizontal}>
                  <div className={`secondaryText  ${css.infoTitle}`}>
                    Client Meeting
                  </div>
                  <p>
                    Our team held weekly online meetings, as well as several
                    face-to-face discussions at the Dearborn Administrative
                    Center (DAC) with department staff and the director. During
                    our first encounter, we familiarized ourselves with the
                    various departments and different types of permit
                    application procedures.
                  </p>
                  <p>
                    In subsequent meetings, we delved deeper, gaining a thorough
                    understanding of the permit application process. Following
                    discussion, our team and the client mutually agreed to
                    concentrate on designing the application processes for two
                    specific permits. This design will be flexible and can be
                    applied to other more complex permit applications in the
                    future.
                  </p>
                </div>
                <div className={css.section_horizontal}>
                  <img
                    id={css.dac}
                    src="../../../public/client_meeting.png"
                    alt="Client Meeting"
                  />
                </div>
              </div>
              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Interview
                </div>
                <span>
                  The Economic Development Department of the City of Dearborn,
                  Michigan
                </span>
              </div>
              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>Persona</div>
                <span>
                  The Economic Development Department of the City of Dearborn,
                  Michigan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
