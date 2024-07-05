import style from "./contact.module.css";
import theme from "../assets/theme_pattern.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";
import { useRef } from "react";

const Contact = () => {
  /*used to send email to owner*/
  const Name = useRef();
  const email = useRef();
  const message = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70e2ea86-338a-4514-982d-c9b225baf7f1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Name.current.value = "";
      email.current.value = "";
      message.current.value = "";
      alert("Request Sent Sucessfully");
    }
  };

  return (
    <div id="Contact" className={style.contact}>
      <div className={style.title}>
        <h1>Let's Connect</h1>
        <img src={theme} alt="" />
      </div>
      <div className={style.section}>
        <div className={style.left}>
          <h1>Contact Info .</h1>
          <p>
            I am currently available to take new projects , feel free about
            anything you want me to work with. Contact anytime
          </p>
          <div className={style.details}>
            <div className={style.detail}>
              <img src={mail} alt="" />
              <p>ojasviswami22@gmail.com</p>
            </div>
            <div className={style.detail}>
              <img src={call} alt="" />
              <p>9467043688</p>
            </div>
            <div className={style.detail}>
              <img src={location} alt="" />
              <p>Kurukshetra , Haryana.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={style.right}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={Name}
            type="text"
            placeholder="Enter Your Name"
            id="name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            ref={email}
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
            autoComplete="email"
          />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            ref={message}
            name="message"
            id="message"
            rows={5}
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className={style.btn}>
            Send Query{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
