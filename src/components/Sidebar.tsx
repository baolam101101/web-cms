import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav>
      <input type="checkbox" name="open" id="open" />
      <label htmlFor="open" className="open">
        <i>Menu</i>
      </label>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user-management">User Management</Link>
          </li>
          <li>
            <Link to="/service-management">Service Management</Link>
          </li>
          <li>
            <Link to="/transaction-history">Transaction History</Link>
          </li>
          <li>
            <Link to="/personal-setting">Personal Setting</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
