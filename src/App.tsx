import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import UserManagement from "./components/UserManagement";
import PersonalSetting from "./components/PersonalSetting";
import TransactionHistory from "./components/TransactionHistory";
import ServiceManagement from "./components/ServiceManagement";
import "./App.css";

const App = () =>{
  const [userRole, setUserRole] = 
  useState<'Admin' | 'Agent' | 'ServiceAdmin'>('Admin');

  const renderUI = () => {
    switch (userRole) {
      case 'Admin':
        return(
          <>
            <HomePage/>
            <ServiceManagement/>
            <UserManagement/>
            <TransactionHistory/>
            <PersonalSetting/>
          </>
        );
      case 'ServiceAdmin':
        return (
          <>
            <HomePage/>
            <ServiceManagement/>
            <TransactionHistory/>
            <PersonalSetting/>
          </>
        );
      case 'Agent':
        return (
          <>
            <TransactionHistory/>
            <PersonalSetting/>
          </>
        );
        default:
          return null;
    }
  };

  return (
    <Router>
      <div>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/personal-setting" element={<PersonalSetting />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/service-management" element={<ServiceManagement />} />
        </Routes>
        <div className="pad">
        <button onClick={() => setUserRole('Admin')}>Admin</button>
        <button onClick={() => setUserRole('ServiceAdmin')}>Admin Service</button>
        <button onClick={() => setUserRole('Agent')}>Agent</button>
        {renderUI()}
        </div>
      </div>
    </Router>
  )
}

export default App;