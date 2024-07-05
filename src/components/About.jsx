import style from "./About.module.css";
import theme from "../assets/theme_pattern.svg";
import profileimg from "../assets/image.jpg";
import { FaArrowUpZA } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../store/store";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/github.png";
import Skill from "./skill";
const About = () => {
  const {visible}=useContext(UserContext);
  const {showmore}=useContext(UserContext);
  return (
    <div id="About" className={style.about}>
      <div className={style.title}>
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className={style.section}>
        <div className={style.left}>
          <img src={profileimg} alt="" className={style.img} />
        </div>
        <div className={style.right}>
          <div className={style.para}>
            <p>
            I am a B.Tech student at NIT Kurukshetra pursuing a degree in ECE with a strong passion for web development. My diligence and motivation drive me to contribute to cutting-edge projects in the digital sphere. I possess a solid foundation in React and frontend development and am eager to leverage my technical skills to make an impact.
            </p>
            <p>
              I continually expand my skill set to embrace emerging technologies
              and industry best practices..
            </p>
          </div>
          <div className={style.allskills}>
            <div className={style.skills}>
              <div className={style.skill}>
                <p> Front-End Development </p>
                <hr style={{ width: "50%" }} />{" "}
              </div>
              <div className={style.skill}>
                <p> React.Js </p>
                <hr style={{ width: "60%" }} />{" "}
              </div>
              <div className={style.skill}>
                <p> Version Control </p>
                <hr style={{ width: "50%" }} />{" "}
              </div>
              <div className={style.skill}>
                <p> Chrome Extension Development </p>
                <hr style={{ width: "50%" }} />{" "}
              </div>
            </div>
            <center><div className={style.showmore} onClick={showmore}>
              <h2>Show More </h2>
              <FaArrowUpZA className={style.icon}/>
            </div></center>
          </div>
        </div>
      </div>

      <div className={style.edu}>
        <div className={style.marks}>
          <h1>8.5 +</h1>
          <p>CGPA @ N.I.T. Kurukshetra</p>
        </div>
        <hr />
        <div className={style.marks}>
         <a href="https://www.linkedin.com/in/ojasvi-swami-704359253/" target="_main">
          <img src={linkedin} alt="" className={style.linkedin} />
         </a>
         
        </div>
        <hr />
        <div className={style.marks}>
          <a href="https://github.com/OJASVISWAMI22" target="_main">
          <img src={github} alt=""  className={style.github}/>
          </a>
        </div>
      </div>
      {!visible && <Skill></Skill>}
    </div>
  );
};
export default About;
