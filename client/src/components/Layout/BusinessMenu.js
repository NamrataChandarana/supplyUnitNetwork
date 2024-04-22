import React from "react";
import { NavLink } from "react-router-dom";

const BusinessMenu = () => {
    return (
        <div>
          <div className="text-center dashboard-menu ">
            <div className="list-group bg-[#3956DE]">
              <h4>Dashboard</h4>
              <NavLink
                to="/businessDashboard/user/profile"
                className="list-group-item list-group-item-action"
              >
                Profile
              </NavLink>
              {/* <NavLink
                to="/ashboard/user/orders"
                className="list-group-item list-group-item-action"
              >
                Product
              </NavLink> */}
            </div>
          </div>
        </div>
      );
}

export default BusinessMenu