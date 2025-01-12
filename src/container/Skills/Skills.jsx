// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // eslint-disable-next-line
// import {AiFillEye, AiFillGithub} from 'react-icons/ai';
// // eslint-disable-next-line
// import ReactTooltip from 'react-tooltip'
// import  AppWrap  from "../../Wrapper/AppWrap";
// import  MotionWrap  from "../../Wrapper/MotionWrap";
// import { urlFor, client } from "../../Client";
// import './Skills.scss';
// // eslint-disable-next-line
// import { ClientError } from "@sanity/client";
// import Marquee from "react-fast-marquee";



// const Skills = () => {

//   // eslint-disable-next-line
//   const [experiences, setExperiences] = useState([]);
//   const [skills, setSkills] = useState([]);

//   useEffect(()=>{
//       const query = '*[_type == "experiences"]';
//       const skillQuery = '*[_type == "skills"]';
//       client.fetch(skillQuery).then((data)=>{
//         setSkills(data);
//       })
//       client.fetch(query).then((data) =>{
//         setExperiences(data);
//       })
//   },[])

//   return (
//     <div>
//       <h2 className="head-text" style={{marginTop : '1rem'}}>Skills</h2>
//       <Marquee>
//       <div className="app__skills-container">
//         <motion.div className="app__skills-list">
//           {skills.map((skill)=>(
//             <motion.div
//               whileInView={{opacity:[0,1]}}
//               transition={{duration : 0.5}}
//               className="app__skills-item app__flex"
//               key={skill.name}
//             >
//               <div className="app__flex" style={{backgroundColor : skill.bgColor}} >
//                 <img src={urlFor(skill.icon)} alt={skill.name}/>
//               </div>
//               <p className="p-text">
//                 {skill.name}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//       </Marquee>
//     </div>
//   )
// }

// export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import AppWrap from "../../Wrapper/AppWrap";
// import MotionWrap from "../../Wrapper/MotionWrap";
// import { urlFor, client } from "../../Client";
// import './Skills.scss';
// import Marquee from "react-fast-marquee";
// import Terminal from "./Terminal";

// const Skills = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const skillQuery = '*[_type == "skills"]';
//     client.fetch(skillQuery).then((data) => {
//       setSkills(data);
//     });
//   }, []);

//   return (
//     <div className="app__skills">
//       <h2 className="head-text" style={{ marginTop: '1rem' }}>Skills</h2>
//       <div className="app__skills-container">
//         <div className="app__skills-terminal">
//           <Terminal />
//         </div>
//         <div className="app__skills-list-container">
//           <Marquee>
//             <motion.div className="app__skills-list">
//               {skills.map((skill) => (
//                 <motion.div
//                   whileInView={{ opacity: [0, 1] }}
//                   transition={{ duration: 0.5 }}
//                   className="app__skills-item app__flex"
//                   key={skill.name}
//                 >
//                   <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
//                     <img src={urlFor(skill.icon)} alt={skill.name} />
//                   </div>
//                   <p className="p-text">{skill.name}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../Wrapper/AppWrap";
import MotionWrap from "../../Wrapper/MotionWrap";
import { urlFor, client } from "../../Client";
import './Skills.scss';
import Terminal from "./Terminal";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const renderSkillsInStarPattern = () => {
    const patternSizes = [5, 4, 3];
    let skillIndex = 0;

    return patternSizes.map((size, rowIndex) => (
      <div key={rowIndex} className={`app__skills-row app__skills-row-${rowIndex + 1}`}>
        {Array(size).fill().map((_, colIndex) => {
          if (skillIndex >= skills.length) return null;
          const skill = skills[skillIndex++];
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="app__skills">
      {/* <h2 className="head-text" style={{ marginTop: '1rem' }}>Skills</h2> */}
      <div className="app__skills-container">
        <div className="app__skills-terminal">
          <Terminal />
        </div>
        <div className="app__skills-list-container">
          <div className="app__skills-star-pattern">
            {renderSkillsInStarPattern()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');

// import React, { useState, useEffect } from "react";