import React, { useImperativeHandle, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeadershadow from "../../hooks/useHeaderShadow";

const Header = () => {
  // determine whether to show the menu in small screen view
  const [menuOpened, setMenuOpened] = useState(false);
  // hook to get shadow for header when scrolling down
  const headerShadow = useHeadershadow();
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
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Resume</a>
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
