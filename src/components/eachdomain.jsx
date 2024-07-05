import { useContext } from "react";
import styles from "./eachdomain.module.css";
import { UserContext } from "../store/store";
import data from "../assets/readmore.js";

const Each = ({no}) => {
 
  let title="";
  let para="";

  const { value } = useContext(UserContext);
  const { handleClick } = useContext(UserContext);

  return (
    <>
    {
      data.map((item)=>{
        if(item.s_no === no){
          title=item.s_name;
          para=item.s_desc;
        }
      })
    }

      {!value && (
        
      <div className={styles.contain}>
        <div className={styles.card} id={styles.animation}>
          <button className={styles.closeButton} onClick={handleClick}>
            &times;
          </button>
          <h2 className={styles.heading}>{title}</h2>
          <center className={styles.paragraph}>{para}</center>
        </div>
      </div>
    )}
  </>
  );
};
export default Each;
