import React from "react";
import { fadeIn, footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <motion.section
      className={css.wrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerChildren}
    >
      <motion.div variants={footerVariants} className={css.container}>
        <div className={css.info}>
          <div className={`secondaryText ${css.title}`}>Phone</div>
          <span>+1 7342949944</span>
        </div>
        <div className={css.info}>
          <div className={`secondaryText ${css.title}`}>Email</div>
          <span>xrcao@umich.edu</span>
        </div>
        <div className={css.info}>
          <div className={`secondaryText ${css.title}`}>Follow Me</div>
          <div className={css.icons}>
            <a href="https://www.linkedin.com/in/xrcao/" target="_blank">
              <img
                style={{ height: "1rem", width: "1rem" }}
                alt="LinkedIn Icon"
                src="/LinkedIn.svg"
              />
            </a>
            <a href="https://github.com/XinranCao" target="_blank">
              <img
                style={{ height: "1.2rem", width: "1.2rem" }}
                alt="Github Icon"
                src="/Github.png"
              />
            </a>
          </div>
        </div>
        <div className={css.info}>
          <div className={`secondaryText ${css.attribute}`}>
            © 2023 By Xinran Cao
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
