import React from "react";
import css from "./Works.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText"> My Works</span>
          </div>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
            <a
              href="https://xinrancao.github.io/course_scheduler/"
              target="_blank"
            >
              <img src="../../../public/scheduler.png" alt="project" />
            </a>
            <div className={`secondaryText  ${css.proj_title}`}>
              Course Scheduler
            </div>
            <div className={css.proj_subtitle}>
              Re-design of Online Course Scheduler
            </div>
            <div className={css.proj_tags}>
              <span>#UX Design</span>
              <span>#Web Design</span>
              <span>#Web Development</span>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
            <a href="https://xinrancao.github.io/jiangwen/" target="_blank">
              <img src="../../../public/jiangwen.png" alt="project" />
            </a>
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
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
    </section>
  );
};
export default Works;
