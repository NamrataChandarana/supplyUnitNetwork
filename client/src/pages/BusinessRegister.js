import React, { useState } from "react";
import Layout from "./../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import "../../styles/AuthStyles.css";

function BusinessRegister() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("manufacuture");
  //   const navigate = useNavigate();
  console.log(firstname)

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/business/new", {
        firstname,
        lastname,
        companyname,
        phoneNo,
        username,
        password,
        category,
        city,
        state,
        address,
        email,
        website,
      });
      console.log(res);
      if (res && res.data.success === true) {
        toast.success(res.data.message);
        // navigate
      }
      if (res && res.data.success === false) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong!");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <nav
        class="flex"
        aria-label="Breadcrumb"
        className="pt-[80px] pl-4 bg-[#eaebf3] "
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
                Register
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="container py-5 h-100 login w-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            {/* <div className="section-title">
              <h2>Log In</h2>
            </div> */}
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center shadow-lg rounded">
                <div className="section-title">
                  <h2>Register</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control form-control-lg"
                      placeholder="Firstname"
                      value={firstname}
                      autoComplete="off"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control form-control-lg"
                      placeholder="Lastname"
                      value={lastname}
                      autoComplete="off"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="companyname"
                      className="form-control form-control-lg"
                      placeholder="companyname"
                      value={companyname}
                      autoComplete="off"
                      onChange={(e) => setCompanyname(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      autoComplete="off"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      name="phoneNo"
                      className="form-control form-control-lg"
                      placeholder="phoneNo"
                      value={phoneNo}
                      autoComplete="off"
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="username"
                      className="form-control form-control-lg"
                      placeholder="username"
                      value={username}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div> */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      name="password"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <select
                      name="category"
                      placeholder="category"
                      className="form-control form-control-lg"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="manufacuture">Manufacture</option>
                      <option value="transpoter">Transpoter</option>
                      <option value="designer">Designer</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="raw-material-dealer">
                        Raw-material-dealer
                      </option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="city"
                      className="form-control form-control-lg"
                      value={city}
                      autoComplete="off"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="state"
                      placeholder="state"
                      className="form-control form-control-lg"
                      value={state}
                      autoComplete="off"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="address"
                      className="form-control form-control-lg"
                      value={address}
                      autoComplete="off"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="website"
                      placeholder="website"
                      className="form-control form-control-lg"
                      value={website}
                      autoComplete="off"
                      onChange={(e) => setWebsite(e.target.value)}
                      // required
                    />
                  </div>
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BusinessRegister;
