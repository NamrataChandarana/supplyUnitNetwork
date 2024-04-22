import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import BusinessMenu from "../../components/Layout/BusinessMenu";
import { useNavigate } from "react-router-dom";
const BusinessProfile = () => {
  //context
  const [auth, setAuth] = useAuth();
  const [registerUser, setRegisterUser] = useState();
  //state
  // const [name, setName] = useState(auth.user.firstname);
  // const [username, setUsername] = useState(registerUser?.username);
  // const [email, setEmail] = useState(auth?.user?.email);
  // const [phoneNo, setPhoneNo] = useState(auth?.user?.phoneNo);
  // const [companyname, setCompanyname] = useState(registerUser?.companyname);
  // const [address, setAddress] = useState(registerUser?.address);
  
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(auth?.user?.email);
  const [phoneNo, setPhoneNo] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const registerEmail = auth?.user?.email;
  console.log(registerEmail)
  console.log(registerUser)
  console.log(name)
  

  const getRegisterUser = async() =>{
    
    try{
      const {data} = await axios.post('/api/v1/business/getBusinessProfile',{
       email:registerEmail
      });
      setRegisterUser(data?.user);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
   getRegisterUser();
  },[]);

  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(registerUser?.firstname);
    setPhoneNo(registerUser?.phoneNo);
    setCompanyname(registerUser?.companyname);
    setAddress(registerUser?.address);
    setUsername(registerUser?.username);
  }, [registerUser, auth?.user]);

  //get user data
  // useEffect(() => {
  //   const { email, name, phone, address } = auth?.user;
  //   setName(name);
  //   setPhone(phone);
  //   setEmail(email);
  //   setAddress(address);
  // }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/business/updateBusinessProfile", {
        name,
        username,
        phoneNo,
        companyname,
        address,
        email
      });
      toast.success("Account updated successfully");
      navigation("/businessDashboard/user");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
          <BusinessMenu />
          </div>
          <div className="col-md-8 mt-5 bg-white">
            <div
              className="form-container bg-white"
              style={{ marginTop: "-40px" }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-md h-[600px] w-[360px]  "
              >
                <h4 className="text-rubik capitalize text-heading pb-3 text-center text-2xl">
                  Update Profile
                </h4>
                <div className="mb-4 px-2">
                  <label className="mb-2 text-muli text-heading">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    required
                    autoFocus
                  />
                </div>
                <div className="mb-4 px-2">
                  <label className="mb-2 text-muli text-heading">
                    Your Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    required
                  />
                </div>
                <div className="mb-4 px-2">
                  <label className="mb-2 text-muli text-heading">
                    Your Companyname
                  </label>
                  <input
                    type="text"
                    value={companyname}
                    onChange={(e) => setCompanyname(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="mb-4 px-2">
                  <label className="mb-2 text-muli text-heading">
                    Your Phone
                  </label>
                  <input
                    type="number"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                    required
                  />
                </div>
                <div className="mb-4 px-2">
                  <label className="mb-2 text-muli text-heading">
                    Your Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessProfile;
