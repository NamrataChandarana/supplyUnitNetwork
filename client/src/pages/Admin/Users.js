import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
// import 
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =useState(false);
  const getAllUsers = async () => {
    try {
      // setLoading(true)
      const res = await axios.get("/api/v1/business/allusers");
      console.log(res.data.users)
      setUsers(res.data.users);
      // setLoading(false)

    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(
        `/api/v1/business/delete-businessAcc/${pId}`
      );
      console.log(res)
      getAllUsers();
      if (res.data.success === "true") {
        toast.success(res.data.message); 
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3 dashboard ">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
          {console.log(users)}
          {users.length > 0 ? (
            users &&
            users.map((user) => (
              <div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-2 w-[100%]">
                <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row w-[80%]">
                    {/* <div class="relative w-full md:w-48 flex justify-center items-center">
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png" alt="shopping image"
                            class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
                    </div> */}
                    <form class="flex-auto p-9">
                        <div class="flex flex-wrap">
                            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">{user.companyname}</h1>
                            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300"><i class="fa-solid fa-phone m-1" ></i> {user.phoneNo}</div>
                            <div class="flex-none w-full my-1 text-sm font-medium text-gray-500 dark:text-gray-300"><b>Category:</b> {user.category}</div>
                            <div class="flex-none w-full my-1 text-sm font-medium text-gray-500 dark:text-gray-300"><b>Description:</b> The company was founded in 1971 by Odhavjibhai R. Patel, and is now run by the third generation of the Patel family. This Company is the world's largest manufacturer of wall clocks, and also makes hand blenders, room heaters, and calculators.</div>
                            <div class="flex-none w-full my-1 text-sm font-medium text-gray-500 dark:text-gray-300"><b>Address:</b> {user.address}</div>
                            <div class="flex-none w-full my-1 text-sm font-medium text-gray-500 dark:text-gray-300"><b>State:</b> {user.city}, {user.state}</div>
                            {/* <div class="flex-none w-full my-1 text-sm font-medium text-gray-500 dark:text-gray-300">City: {user.city}</div> */}
                        </div>
                        
                          
                        <div class="flex my-4 text-sm font-medium">
                            <button type="button" onClick={()=> handleDelete(user._id)}
                                class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Delete</button>
                        </div>
                        {/* <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p> */}
                    </form>
                </div>
            </div>
            ))
            ) : (
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: "100px",
                }}
              >
                Loading
              </h1>
            )}  
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
