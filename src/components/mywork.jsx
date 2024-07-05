import style from "./mywork.module.css";
import theme from "../assets/theme_pattern.svg";
import datas from "../assets/mywork_data.js";
import arrow from "../assets/arrow_icon.svg";
const Work = () => {
  return (
    <div id="Work" className={style.work}>
      <div className={style.title}>
        <h1>My Projects</h1>
        <img src={theme} alt="" />
      </div>
      <div className={style.contain}>
        {datas.map((data, index) => (
          <div key={index} className="project-item">
            <a href={data.w_link} target="_main">
            <img
              src={data.w_img}
              alt={`Project ${data.w_no}: ${data.w_name}`}
            />
            </a>
          </div>
        ))}
      </div>
      <div className={style.more}>
        <a href="https://github.com/OJASVISWAMI22" target="_main">
          Show More
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};
export default Work;
