import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function BusinessDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/business/business-categories/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
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
                to="/categories"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                categories
              </Link>
            </div>
          </li>
          <li aria-current="page">
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
                {category.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="container category">
        <h4 className="text-center text-heading text-xl ">
          Category - {category?.name}
        </h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          {/* <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="col-lg-9 shadow-lg mx-4">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row py-2">
                        <div className="col-sm-3 ">
                          <p className="mb-0">FirstName</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.firstname}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.email}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">Categoty</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.category}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.address}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">City</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.city}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">state</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.state}</p>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col-sm-3">
                          <p className="mb-0">phoneNO</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{p.phoneNo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            {/* <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading ..." : "Loadmore"}
            </button>
          )}
        </div> */}
          {/* </div> */}
          <div className="col-md-12 ">
            {/* {console.log(users)} */}
            {products?.length > 0 ? (
              products &&
              products.map((user) => (
                <div class="flex-col md:flex-row justify-between flex gap-4 items-start my-2 py-2 w-[80%] mx-auto">
                  <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row w-[90%]">
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
                          
                            
                          {/* <div>
                              <button type="button" className="btn btn-light">
                                Contact
                              </button>
                          </div> */}
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
                  No One Yet!
                </h1>
              )}  
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BusinessDetails;
