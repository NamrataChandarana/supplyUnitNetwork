import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategories from "../../hooks/useCategories";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const categories = useCategories();
  const [authUser, setAuthUser] = useCart();
  console.log(auth);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    // localStorage.clear();
    localStorage.removeItem("auth");
    setAuthUser(localStorage.getItem("auth") !== null);
    // setCart([]);
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top ">
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className=" navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="font-bold text-xl capitalize font-rubik text-[#5267c2] "
            >
              SupplyUnitNetwork
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <SearchInput /> */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-lightg hover:text-secondary capitalize active:text-secondary"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
            {auth && auth?.user?.isRegister == false ? (
              <NavLink
              to="/new"
              className="nav-link text-lightg hover:text-secondary capitalize"
            >
              Register
            </NavLink>
            ) : (
              <NavLink
              to="/businessDashboard/user"
              className="nav-link text-lightg hover:text-secondary capitalize"
            >
              Profile
            </NavLink>
            ) }
                
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-lightg hover:text-secondary capitalize"
                  to={"/categories"}
                  // key={Math.random}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-lightg hover:text-secondary capitalize"
                      to={"/categories"}
                    >
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item text-lightg hover:text-secondary capitalize transition-transform  "
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link text-lightg hover:text-secondary capitalize"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-lightg hover:text-secondary capitalize"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown text-lightg hover:text-secondary capitalize">
                    <NavLink
                      className="nav-link dropdown-toggle text-lightg hover:text-secondary capitalize"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{
                        border: "none",
                        color: "#8A8AA0",
                        hover: { color: "#3956DE" },
                      }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu text-lightg hover:text-secondary capitalize">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item text-lightg hover:text-secondary capitalize"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item text-lightg hover:text-secondary capitalize"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link text-lightg hover:text-secondary capitalize"
                >
                  <Badge
                    count={cart?.length}
                    showZero
                    offset={[10, -5]}
                    className=" text-lg text-lightg hover:text-secondary capitalize "
                  >
                    Cart
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
