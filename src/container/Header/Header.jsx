import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Jayant</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
        <motion.div 
        className="app__header-circles-2"
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        >
          {[images.csharp, images.netcore].map((circle, item) => (
            <div className="circle-cmp app__flex" key={`circle-${item}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profilephoto} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.reactpng, images.javascript, images.redux].map(
          (circle, item) => (
            <div className="circle-cmp app__flex" key={`circle-${item}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
