import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import Link from "antd/es/typography/Link";
import axios from "axios";
import { useState } from "react";
import { useRegister } from "../../context/register";
import { useEffect } from "react";
import BusinessMenu from "../../components/Layout/BusinessMenu";
const BusinessDashboard = () => {
  const [auth] = useAuth();
  const [registerUser, setRegisterUser] = useState();
  // const [email, setEmail] = useState();

  const email = auth?.user?.email
  const getRegisterUser = async() =>{
    
    try{
      const {data} = await axios.post('/api/v1/business/getBusinessProfile',{
       email:email
      });
      setRegisterUser(data?.user);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
   getRegisterUser();
  },[]);

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui dashboard ">
        <div className="row">
          <nav
            class="flex"
            aria-label="Breadcrumb"
            className="pl-4 bg-[#eaebf3] mb-10"
            style={{ boxShadow: "2px 2px 12px -2px #00000014!important;" }}
          >
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <Link
                  to="/"
                  class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                      className="bg-blue-600"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to="/"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </div>
              </li>
              {/* <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Flowbite
              </span>
            </div>
          </li> */}
            </ol>
          </nav>
          <div className="col-md-3 ml-5">
            <BusinessMenu />
          </div>
          <div className="col-md-8 ">
            <div className="card w-75 p-3">
              <h3>Name: {registerUser?.firstname}  {registerUser?.lastname}</h3>  
              <h3>Email: {registerUser?.email}</h3>
              <h3>Address: {registerUser?.address}</h3>
              <h3>companyname: {registerUser?.companyname}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessDashboard;
