import { FaArrowCircleUp } from "react-icons/fa";
import style from "./up.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Upbtn=({menu,setmenu})=>{
  
  return <>
  <AnchorLink className="anchor-link" href="#Navbar">
   <FaArrowCircleUp 
   onClick={()=>{setmenu("Navbar")}}
  className={style.btn} 
  id={menu==="Navbar"?style.navbar:" "}
  title="Go To Top"
  >
  </FaArrowCircleUp>
  </AnchorLink>
  </> 
}
export default Upbtn;