import style from "./domain.module.css";
import themeptn from "../assets/theme_pattern.svg";
import datas from "../assets/services_data.js";
import arrow from "../assets/arrow_icon.svg";
import Each from "./eachdomain.jsx";
import { useContext, useState } from "react";
import { UserContext } from "../store/store.jsx";

const Domain = () => {
  const { value } = useContext(UserContext);
  const { handleClick } = useContext(UserContext);
  const[no,setno]=useState(null);
  return (
    <div id="Domain" className={style.domain}>
      <div className={style.title}>
        <h1>My Expertise</h1>
        <img src={themeptn} alt="" />
      </div>
      <div className={style.contain}>
        {datas.map((data, index) => {
          return (
            <div key={index} className={value ? style.format : style.disable}>
              <h3> 0{data.s_no} </h3>
              <h2>{data.s_name}</h2>
              <p>{data.s_desc}</p>
              <div
                className={style.readmore}
                onClick={() => {
                  setno(data.s_no);
                  handleClick();
                }}
              >
                <p>Read More</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {!value && <Each no={no}></Each>}
    </div>
  );
};
export default Domain;
