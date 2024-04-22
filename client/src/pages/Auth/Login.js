import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/login", {
        email,
        password,
      });
      console.log(res);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        // setAuthUser(localStorage.getItem("auth") !== null);
        const isAuth = JSON.parse(localStorage.getItem("auth")) ;
        const userId = isAuth?.user?._id;
        if(auth &&  userId){
          let existingCartItem = localStorage.getItem(`cart_${userId}`);
          if (existingCartItem) setCart(JSON.parse(existingCartItem));
        }else{
          // setCart([]);
        }
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div
        className="form-container "
        style={{ minHeight: "90vh", background: "white" }}
      >
        <form
          onSubmit={handleSubmit}
          className="rounded-md h-[400px] w-[330px]"
        >
          <h4
            className="text-rubik capitalize text-heading pb-3 text-center text-2xl "
            style={{ boxShadow: "2px 2px 12px -2px #00000014!important;" }}
          >
            LogIn
          </h4>

          <div className="mb-4 text-muli ">
            <label className="mb-2 text-muli text-heading">Your email</label>
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control text-muli file:border-solid-lightg"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 text-muli text-heading">Your password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="forgot-btn "
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
