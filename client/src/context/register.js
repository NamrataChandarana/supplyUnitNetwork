import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth";
import axios from "axios";

const RegisterContext = createContext();
const RegisterProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState({
    user: null,
  });
  const [auth, setAuth] = useAuth();

  // const email = auth?.user?.email
  // const getRegisterUser = async() =>{
    
  //   try{
  //     const {data} = await axios.post('/api/v1/business/getBusinessProfile',{
  //      email:email,
  //     });
  //     setRegisterUser(data?.user);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //  getRegisterUser();
  // },[]);

  return (
    <RegisterContext.Provider value={[registerUser, setRegisterUser]}>
      {children}
    </RegisterContext.Provider>
  );
};

// custom hook
const useRegister = () => useContext(RegisterContext);

export { useRegister, RegisterProvider };
