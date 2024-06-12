import React, { useEffect, useState } from "react";
import "./Certifications.scss";
import Carousel from "react-elastic-carousel";
import AppWrap from "../../Wrapper/AppWrap";
// eslint-disable-next-line
import MotionWrap from "../../Wrapper/MotionWrap";
import { motion } from "framer-motion";
// import {images} from '../../constants';
// eslint-disable-next-line
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { urlFor, client } from "../../Client";

// const items = [
//   { id: 1, title: "item #1" },
//   { id: 2, title: "item #2" },
//   { id: 3, title: "item #3" },
//   { id: 4, title: "item #4" },
//   { id: 5, title: "item #5" },
// ];

const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 800, itemsToShow: 1, itemsToScroll: 1, pagination: true },
  { width: 800, itemsToShow: 2, itemsToScroll: 1 },
];

const Certifications = () => {
  // const [animateCard, setAnimateCard] = useState({ x : 100, opacity: 0 });
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';
    client.fetch(query).then((data) => {
      setCertificates(data);
      // setAnimateCard({ x: 0, opacity: 1 });
      console.log(data);
    });
  }, []);

  return (
    <div className="app__cfc">
      <h2 className="head-text">Certificates and Awards</h2>
      <Carousel
        className="app__cfc-container"
        breakPoints={breakPoints}
        focusOnSelect={true}
        itemsToShow={2}
      >
        {certificates.map((item, index) => (
          <motion.div
            // animate={animateCard}
            whileInView={{opacity: [0, 1] }}
            transition={{ duration: 0.9 }}
            key={index}
            className="app__work-item app__flex"
          >
            <div className="app__work-img app__flex">
              {console.log(item.imgUrl)}
              <img src={urlFor(item.imgUrl).url()} alt={item.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  staggerChildren: 0.5,
                  ease: "easeInOut",
                }}
                className="app__work-hover app__flex"
              >
                <a href={item.certificateLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{item.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>

              <div className="app__work-tag app__flex">
                <p>{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default AppWrap(Certifications, "Certifications");
