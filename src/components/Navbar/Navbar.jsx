import React, { useState } from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { HiXCircle, HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
//import {CloseCircleOutlined} from '@ant-design/icons';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.jayant} alt="logo" width="240" height="60" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact", "skills", "Blogs"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {item === "Blogs" ? (
                      <a href="https://jayantverma.hashnode.dev/" target="_blank">
                        {item}
                      </a>
                    ) : (
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    )}
            <div />
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* <HiXCircle onClick={() => setToggle(false)} /> */}
            <HiXCircle onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "contact", "skills", "Blogs"].map(
                (item) => (
                  <li key={item}>
                    {item === "Blogs" ? (
                      <a href="https://jayantverma.hashnode.dev/" target="_blank">
                        {item}
                      </a>
                    ) : (
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
