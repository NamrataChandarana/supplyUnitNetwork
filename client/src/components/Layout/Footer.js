import React from "react";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
const Footer = () => {
  const categories = useCategories();
  return (
    // <div className="footer">
    //   <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    // </div>
    <>
      <footer class="text-gray-400 bg-[#292D32] body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-secondary rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="font-large text-white  text-xl ml-1 font-rubik">
                SupplyUnitNetwork
              </span>
            </a>
            <p class="mt-2 text-sm text-[rgba(255,255,255,.5)] font-muli">
              1234 North Avenue Luke Lane South Bend, IN 360001 India
            </p>
          </div>
          <div class="flex-grow flex flex-wrap mx-auto md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
            <div class="lg:w-[30%] md:w-1/2 w-full px-4">
              <h2 class=" font-large text-white  text-lg mb-3 font-rubik">
                Useful Links
              </h2>
              <nav class="list-none mb-10 font-muli">
                <li className="mb-2">
                  <a class="text-gray-400 hover:text-[#c87065] mb-5" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    class="text-gray-400 hover:text-[#c87065] mb-5"
                    href="/categories"
                  >
                    Categories
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    class="text-gray-400 hover:text-[#c87065] pb-5"
                    href="/new"
                  >
                    Registration
                  </a>
                </li>
                <li className="mb-2">
                  <a class="text-gray-400 hover:text-[#c87065] pb-5" href="/">
                    Shopping
                  </a>
                </li>
              </nav>
            </div>
            {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10 ">
                <li className="mb-1">
                  <a class="text-gray-400 hover:text-white mb-5">Home</a>
                </li>
                <li className="mb-1">
                  <a class="text-gray-400 hover:text-white mb-5">Categories</a>
                </li>
                <li className="mb-1">
                  <a class="text-gray-400 hover:text-white pb-5">
                    Registration
                  </a>
                </li>
                <li className="mb-1">
                  <a class="text-gray-400 hover:text-white pb-5">Shopping</a>
                </li>
              </nav>
            </div> */}
            <div class="lg:w-[30%] md:w-1/2 w-full px-4">
              <h2 class=" text-white  text-lg mb-3 font-rubik ">Categories</h2>
              <nav class="list-none mb-10 font-muli text-[rgba(255,255,255,.5)]">
                <li class="pb-2">
                  <Link
                    className="dropdown-item hover:text-[#c87065]"
                    to={"/categories"}
                  >
                    All Categories
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li class="pb-2 hover:text-[#c87065]">
                    <Link className="dropdown-item" to={`/category/${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
            <div class="lg:w-[30%] md:w-1/2 w-full px-4">
              <p className="leading-normal font-muli">
                SupplyUnitNetwork <br />
                34/265, Anand Nagar,
                <br /> Vakola, Santacruz East,
                <br /> Mumbai 400055,
                <br />
                Maharashtra , India
              </p>
              <span class="font-muli text-[rgba(255,255,255,.5)]">
                +918591336124
              </span>
              <br />
              <span class="font-muli text-[rgba(255,255,255,.5)]">
                contact@SupplyUnitNetwork.com
              </span>
            </div>
          </div>
        </div>
        <div class="bg-[#40464d] bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-500 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
