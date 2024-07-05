import {  createContext, useState } from "react";

export const UserContext = createContext({
  handleClick:()=>{},
  value: "",
  visible: "",
  showmore:()=>{},
});

const Dataprovider=({children})=>{
  
  const [visible,setvisible]=useState(true);
  const showmore=()=>{
    setvisible(!visible);

  }
  const [value, setvalue] = useState(true);

  const handleClick = () => {
    setvalue(!value);
  };

  return<UserContext.Provider value={{
    handleClick,
    value,
    visible,
    showmore,
  }}>
    {children}
  </UserContext.Provider>
}
export default Dataprovider;
