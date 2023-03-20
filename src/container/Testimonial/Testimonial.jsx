import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../Wrapper/AppWrap";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import "./Testimonial.scss";
import { client, urlFor } from "../../Client";
import MotionWrap from "../../Wrapper/MotionWrap";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setTestimonial(data);
    });
  }, []);

  const test = testimonial[currentIndex];
  const handleClick = (index) => {
    setCurrentIndex(index)
  };

  return (
    <>
      {testimonial.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
                onClick={()=> handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}
            >
              <AiOutlineCaretLeft />
            </div>
            <div
              className="app__flex"
              onClick={()=> handleClick(currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}
            >
              <AiOutlineCaretRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__whitebg"
);
