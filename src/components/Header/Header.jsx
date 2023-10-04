import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeadershadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
const Header = ({ tab, handleClickTab }) => {
  // determine whether to show the menu in small screen view
  const [menuOpened, setMenuOpened] = useState(false);
  // hook to get shadow for header when scrolling down
  const headerShadow = useHeadershadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-primary  ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Xinran</div>
        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          {/* {["Work", "More", "About", "Resume"].map((item, index) => (
            <li key={index}>
              <a
                onClick={() => handleClickTab(index)}
                className={`${tab === index ? css.active : css.inactive}`}
              >
                {item}
              </a>
            </li>
          ))} */}
          <li>
            <a
              onClick={() => handleClickTab(0)}
              className={`${tab === 0 ? css.active : css.inactive}`}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/resume/resume_frontend_v2.pdf"
              target="_blank"
              className={css.inactive}
            >
              Resume
            </a>
          </li>
        </ul>
        {/* icon that opens the menu for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {/* menu icon */}
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
