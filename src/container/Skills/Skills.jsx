import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
// eslint-disable-next-line
import ReactTooltip from 'react-tooltip'
import  AppWrap  from "../../Wrapper/AppWrap";
import  MotionWrap  from "../../Wrapper/MotionWrap";
import { urlFor, client } from "../../Client";
import './Skills.scss';
// eslint-disable-next-line
import { ClientError } from "@sanity/client";
import Marquee from "react-fast-marquee";



const Skills = () => {

  // eslint-disable-next-line
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
      const query = '*[_type == "experiences"]';
      const skillQuery = '*[_type == "skills"]';
      client.fetch(skillQuery).then((data)=>{
        setSkills(data);
      })
      client.fetch(query).then((data) =>{
        setExperiences(data);
      })
  })

  return (
    <div>
      <h2 className="head-text" style={{marginTop : '1rem'}}>Skills</h2>
      <Marquee>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill)=>(
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration : 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor : skill.bgColor}} >
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className="p-text">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </Marquee>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')