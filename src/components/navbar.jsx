import styles from "./navbar.module.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = ({menu,setmenu}) => {
  return (
    <>
      <div id="Navbar" className={styles.navbar}>
        <div className={styles.logo}>
        <h1>OJASVI</h1>
        </div>
        
        <ul className={styles.menu}>
          <li>
            <AnchorLink className="anchor-link" offset={50}  href="#Home">
            <p
              className={menu === "Home" ? styles.underline : ""}
              onClick={() => setmenu("Home")}
            >
              Home
            </p>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p
              className={menu === "About Me" ? styles.underline : ""}
              onClick={() => setmenu("About Me")}
            >
              About Me
            </p>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink className="anchor-link" offset={50} href="#Domain">
            <p
              className={menu === "Domains" ? styles.underline : ""}
              onClick={() => setmenu("Domains")}
            >
              Expertise
            </p>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink className="anchor-link" offset={50} href="#Work">
            <p
              className={menu === "My Projects" ? styles.underline : ""}
              onClick={() => setmenu("My Projects")}
            >
              My Projects
            </p>
            </AnchorLink>
          </li>
          <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p
              className={menu === "Contact Me" ? styles.underline : ""}
              onClick={() => setmenu("Contact Me")}
            >
              Contact Me
            </p>
            </AnchorLink>
          </li>
        </ul>
        <button className={styles.connect}><AnchorLink className="anchor-link" offset={50} href="#Contact" onClick={()=>setmenu("Contact Me")}>Let's Connect</AnchorLink></button>
      </div>
      <hr  className={styles.hr} />
    </>
  );
};
export default Navbar;
