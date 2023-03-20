import React, { useState } from "react";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import MotionWrap from "../../Wrapper/MotionWrap";
import { client } from "../../Client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, SetIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [uploadImage, setUploadImage] = useState(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // const {PicName , files} = e.target;

    // console.log(files[0].name);
    // console.log(files);
    // console.log(name);

    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  

  const handleSubmit = () => {
    setLoading(true);

    

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
      
    };
    client.create(contact).then(() => {
      setLoading(false);
      SetIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:iamvermajayant@gmail.com" className="p-text">
            iamvermajayant@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +91 9450871387" className="p-text">
            +91 9450871387
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              name="message"
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="head-text">Thanks for getting in touch !👨‍💻</h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
