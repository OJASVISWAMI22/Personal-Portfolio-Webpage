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
                <h3>Web Development</h3>
                <ul>
                  <li>MERN Stack</li>
                  <li>Restful Api</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Redux & React Context</li>
                  <li>Version Control</li>
                </ul>
              </div>
              <div className={styles.int}>
                <h3>Problem Solving</h3>
                <ul>
                  <li>DSA</li>
                  <li>Algorithm Design</li>
                  <li>Dynamic Programming</li>
                  <li>Bit Manipulation</li>
                  <li>Data Interpretation</li>
                  <li>Abstract Reasoning</li>
                </ul>
              </div>
              <div className={styles.beg}>
                <h3>CS fundamental</h3>
                <ul>
                  <li>OOPS</li>
                  <li>Computer Network</li>
                  <li>Operating System</li>
                  <li>DBMS</li>
                  <li>Computer Arch.</li>
                  <li>DSA</li>

                </ul>
              </div>
            </div>
            <div className={styles.lang}>
              <b>Languages :- </b>
              <p>C / C++ / Javascript </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Skill;
