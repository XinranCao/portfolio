import React from "react";
import css from "./Works.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText"> My Projects</span>
          </div>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.div variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img src="../../../public/dearborn.png" alt="project" />
            <div className={`secondaryText  ${css.proj_title}`}>
              Permitting Better Permitting
            </div>
            <div className={css.proj_subtitle}>
              Citizen Interaction Design - Permit Application Process
            </div>
            <div className={css.proj_tags}>
              <span>#Citizen Interaction Design</span>
              <span>#UX Research</span>
              <span>#UX Design</span>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.6)}>
            <img src="../../../public/ucsf_library.png" alt="project" />
            <div className={`secondaryText  ${css.proj_title}`}>
              UCSF Library Website Evaluation
            </div>
            <div className={css.proj_subtitle}>
              Consulting and UX Research for Enhanced Mobile Interface
            </div>
            <div className={css.proj_tags}>
              <span>#Consulting</span>
              <span>#UX Research</span>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.9, 0.6)}>
            <img src="../../../public/jiangwen.png" alt="project" />
            <div className={`secondaryText  ${css.proj_title}`}>
              Jiang Wen Movie Website
            </div>
            <div className={css.proj_subtitle}>
              Responsive Website for Exposition of Jiang Wen Films
            </div>
            <div className={css.proj_tags}>
              <span>#Web Design</span>
              <span>#Responsive Web Development</span>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 1.1, 0.6)}>
            <img src="../../../public/elo.png" alt="project" />
            <div className={`secondaryText  ${css.proj_title}`}>
              Aligning Cross-Department Project Recruitment
            </div>
            <div className={css.proj_subtitle}>
              Consulting with The Engaged Learning Office
            </div>
            <div className={css.proj_tags}>
              <span>#Consulting</span>
              <span>#UX Research</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Works;
