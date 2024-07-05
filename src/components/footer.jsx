import style from "./footer.module.css";
import logo from "../assets/footer_logo.svg";
import icon from "../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.top}>
        <div className={style.tleft}>
          <h1>Ojasvi</h1>
          <p>Crafted with ❤️ by Ojasvi, 2024</p>
        </div>
        <div className={style.tright}>
          <div className={style.input}>
            <img src={icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className={style.subscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={style.bottom}>
        <p className={style.bleft}>© OJASVI SWAMI ,2024. All rights reserved.</p>
        <div className={style.bright}>
          
        </div>
      </div>
    </div>
  );
};
export default Footer;
