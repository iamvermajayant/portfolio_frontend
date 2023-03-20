import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion } from 'framer-motion';
import {images} from '../../constants';
import { client, urlFor } from '../../Client';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';


// const abouts = [{
//   title : 'web Development',
//   description : 'I am a Good Developer',
//   imgURL : images.about01
// },{
//   title : 'FrontEnd Development',
//   description : 'I am a Good Developer',
//   imgURL : images.about02
// },{
//   title : 'UI/UX design',
//   description : 'I am a Good Developer',
//   imgURL : images.about03
// },{
//   title : 'MERN Stack',
//   description : 'I am a Good Developer',
//   imgURL : images.about04
// }]

const About = () => {
  const [abouts, setAbout] = useState([]);

  useState(()=>{
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data)=>{
      setAbout(data);
      console.log(data);
    })
  },[])

  return (
    <>
      <h2 className="head-text">
        I know that{" "}
        <span>Good Development</span>
        <br/>
        {" "}means{" "} 
        <span>
          Good Business
        </span>
      </h2>
      <div className="app__profiles">
      {abouts.map((abouts, index)=>(
        <motion.div
          whileInView={{opacity : 1}}
          whileHover={{scale : 1.1}}
          transition={{duration : 0.6, type: 'tween'}}
          className="app__profile-item"
          key={abouts.title + index}
        > 
          <img src={urlFor(abouts.imgUrl)} alt={abouts.title}  />
          <h2 className="bold-text" style={{marginTop : 20}}>{abouts.title}</h2>
          <p className="bold-text" style={{marginTop : 10}}>{abouts.description}</p>
        </motion.div>
      ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 'about', 'app__whitebg');