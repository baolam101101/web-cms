import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import UserManagement from "./components/UserManagement";
import PersonalSetting from "./components/PersonalSetting";
import TransactionHistory from "./components/TransactionHistory";
import ServiceManagement from "./components/ServiceManagement";
import { Role } from "./components/Role";

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  return (
    <Router>
      <div>
        {selectedRole && <Sidebar role={selectedRole} />}
        <Routes>
          <Route
            path="/home-page"
            element={
              selectedRole === Role.Admin ||
              selectedRole === Role.ServiceAdmin ? (
                <HomePage />
              ) : (
                <div className="pad">You don't have access!</div>
              )
            }
          />
          <Route
            path="/user-management"
            element={
              selectedRole === Role.Admin ? (
                <UserManagement />
              ) : (
                <div className="pad">You don't have access!</div>
              )
            }
          />
          <Route
            path="/service-management"
            element={
              selectedRole === Role.Admin ||
              selectedRole === Role.ServiceAdmin ? (
                <ServiceManagement />
              ) : (
                <div className="pad">You don't have access!</div>
              )
            }
          />
          <Route
            path="/transaction-history"
            element={
              selectedRole === Role.Admin ||
              selectedRole === Role.ServiceAdmin ||
              selectedRole === Role.Agent ? (
                <TransactionHistory />
              ) : (
                <div className="pad">You don't have access!</div>
              )
            }
          />
          <Route
            path="/personal-setting"
            element={
              selectedRole === Role.Admin ||
              selectedRole === Role.ServiceAdmin ||
              selectedRole === Role.Agent ? (
                <PersonalSetting />
              ) : (
                <div className="pad">You don't have access!</div>
              )
            }
          />
        </Routes>

        <div className="pad">
          <h2>Please choose your role</h2>
          <button onClick={() => handleRoleSelect(Role.Admin)}>Admin</button>
          <button onClick={() => handleRoleSelect(Role.ServiceAdmin)}>
            Service Admin
          </button>
          <button onClick={() => handleRoleSelect(Role.Agent)}>Agent</button>
        </div>
      </div>
    </Router>
  );
};
export default App;
