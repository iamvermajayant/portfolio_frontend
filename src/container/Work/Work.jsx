import React, { useState, useEffect } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import  AppWrap  from "../../Wrapper/AppWrap";
import { urlFor, client } from "../../Client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{y:100, opacity : 0}]);

      setTimeout(()=>{
        setAnimateCard([{y:0, opacity :1}]);

        if(item === 'All'){
          setFilterWork(works);
        }
        else{
          setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
      },500)
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["React Js", "Web App", "Mobile App", "All", "UI/UX"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__flex app__work-filter-item p-text ${
                activeFilter === item ? "item-active" : " "
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              {console.log(work.imgUrl)}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  staggerChildren: 0.5,
                  ease: "easeInOut",
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale : [0,1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale : [0,1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
                <h4 className="bold-text">
                  {work.title}
                </h4>
                <p className="p-text" style={{marginTop : 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p>{work.tags[0]}</p>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
