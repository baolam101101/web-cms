import React from 'react';
import { Link } from 'react-router-dom';
import { Role } from './Role';
import "./Sidebar.css";

interface SidebarProps {
  role: Role;
}
const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    return (
      <nav>
        <input type="checkbox" name="open" id="open" />
        <label htmlFor="open" className="open">
          <i>Menu</i>
        </label>
        <div className="menu">
          <ul>
            {role === Role.Admin && (
              <><li><Link to="/home-page">Home</Link></li>
                <li><Link to="/user-management">User Management</Link></li>
                <li><Link to="/service-management">Service Management</Link></li>
                <li><Link to="/transaction-history">Transaction History</Link></li>
                <li><Link to="/personal-setting">Personal Setting</Link></li></>
            )}
            {role === Role.ServiceAdmin && (
              <><li><Link to="/home-page">Home</Link></li>
                <li><Link to="/service-management">Service Management</Link></li>
                <li><Link to="/transaction-history">Transaction History</Link></li>
                <li><Link to="/personal-setting">Personal Setting</Link></li></>
            )}
            {role === Role.Agent && (
              <><li><Link to="/transaction-history">Transaction History</Link></li>
                <li><Link to="/personal-setting">Personal Setting</Link></li></>
            )}
          </ul>
        </div>
      </nav>
    );
  };

export default Sidebar;
