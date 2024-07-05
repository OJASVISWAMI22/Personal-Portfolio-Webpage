import style from "./hero.module.css";
import resumePDF from '../assets/Resume.pdf';
import profilepic from "../assets/IMG.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
const Hero = ({setmenu}) => {
  const [text, setText] = useState(''); // State for displayed text

  const textToDisplay = ', Web Developer passionate about creating functionally robust websites.';
  const typingSpeed = 110; // Adjust for desired speed (milliseconds)

  // Improved useEffect for continuous animation
  useEffect(() => {
    let index = 0; // Reset index for each loop

    const intervalId = setInterval(() => {
      if (index === textToDisplay.length) {
        index = 0; // Reset index to restart animation
        setText(''); // Clear displayed text
      }

      setText(textToDisplay.substring(0, index + 1)); // Set complete substring
      index++;
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup function for interval
  }, [typingSpeed]);
  const openResumePDF = () => {
    window.open(resumePDF, '_blank');
  };
  return (
    <>
      <div id="Home" className={style.main}>
        <img src={profilepic} alt="" className={style.img} />
        <h1 className={style.h1}>
          <span className={style.span}>I am Ojasvi </span>{text}
        </h1>
        <p className={style.p}>
          I'm committed to deliver excellence in every aspect of web
          development. Ready to elevate your online presence ? Let's collaborate
          and turn your ideas into reality!
        </p>
        <div className={style.action}>
          <div className={style.connect}><AnchorLink className="anchor-link" offset={50} href="#Contact" onClick={()=>{setmenu("Contact Me")}}>Connect With Me</AnchorLink></div>
          <div className={style.resume}  onClick={openResumePDF}>My Resume</div>
        </div>
      </div>
    </>
  );
};
export default Hero;
