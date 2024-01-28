import React from "react";
import css from "./Gallery.module.scss";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = () => {
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
            <a href="https://github.com/XinranCao/FluffyFinder" target="_blank">
              <img src="/fluffy_finder.png" alt="fluffy finder project" />
            </a>
            <div className={`secondaryText  ${css.proj_title}`}>
              Fluffy Finder
            </div>
            <div className={css.proj_subtitle}>
              Mobile Application that helps find lost pets
            </div>
            <div className={css.proj_tags}>
              <span>#Mobile Application Development</span>
              <span>#Database</span>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "tween", 0, 0.6)}
          >
            <Link to="/works/dearborn">
              <img src="/dearborn/dearborn.png" alt="dearborn project" />
            </Link>
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
              <img src="/scheduler.png" alt="course scheduler project" />
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
            <a href="https://xinrancao.github.io/jiangwen/" target="_blank">
              <img src="/jiangwen.png" alt="jiangwen website project" />
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
            <div className={css.comingSoon}>
              <img src="/ucsf_library.png" alt="ucsf library project" />
            </div>

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
            <div className={css.comingSoon}>
              <img src="/elo.png" alt="elo project" />
            </div>
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
export default Gallery;
