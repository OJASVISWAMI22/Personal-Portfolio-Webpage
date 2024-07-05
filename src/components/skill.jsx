import { useContext } from "react";
import { UserContext } from "../store/store";
import styles from "./skill.module.css";
const Skill = () => {
  const { visible } = useContext(UserContext);
  const { showmore } = useContext(UserContext);

  return (
    <>
      {!visible && (
        <div className={styles.contain}>
          <div className={styles.card} id={styles.animation}>
            <button className={styles.closeButton} onClick={showmore}>
              &times;
            </button>
            <h1 className={styles.heading}> Skills </h1>
            <div className={styles.paragraph}>
              <div className={styles.adv}>
                <h2>Web Development</h2>
                <ul>
                  <li>HTML/CSS/JS</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Redux & React Context</li>
                  <li>Version Control</li>
                  <li>Responsive Design</li>
                  <li>Interactive UI</li>
                </ul>
              </div>
              <div className={styles.int}>
                <h2>Problem Solving</h2>
                <ul>
                  <li>DSA</li>
                  <li>Algorithm Design</li>
                  <li>Dynamic Programming</li>
                  <li>Bit Manipulation</li>
                  <li>Data Interpretation</li>
                  <li>Troubleshooting</li>
                  <li>Abstract Reasoning</li>
                </ul>
              </div>
              <div className={styles.beg}>
                <h2>Electronics</h2>
                <ul>
                  <li>Microcontrollers</li>
                  <li>Embedded Systems</li>
                  <li>Wireless Transmission</li>
                  <li>Sensors and Actuators</li>
                  <li>Digital Electronics</li>
                  <li>Memory Design</li>
                  <li>Signal Processing</li>
                </ul>
              </div>
            </div>
            <div className={styles.lang}>
              <b>Languages :- </b>
              <p>C / C++ / Java / Javascript / Matlab /Embedded C</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Skill;
