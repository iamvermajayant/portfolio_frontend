import React from 'react';
// import {BsTwitter, BsInstagram} from 'react-icons';
//import {AiFillTwitterCircle} from '@ant-design/icons';
import { SiTwitter,SiGithub, SiInstagram } from "react-icons/si"
// eslint-disable-next-line
import {Link} from 'react-router-dom';
//import {BsGithub} from 'react-icons';
 
const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
        <a href="https://twitter.com/iamjayant_verma" target="_blank" rel="noreferrer"><SiTwitter/></a>
    </div>
    <div>
        <a href="https://github.com/iamvermajayant" target="_blank" rel="noreferrer"><SiGithub/></a>
    </div>
    <div>
        <SiInstagram/>
    </div>
    </div>
  )
}

export default SocialMedia;