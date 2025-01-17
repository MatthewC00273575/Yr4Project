import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-title">myFi</h1>
        <nav className="menu">
          <NavLink to="/dashboard" className="menu-item">
            Dashboard
          </NavLink>
          <NavLink to="/csvUpload" className="menu-item">
            CSV Upload
          </NavLink>
          <NavLink to="/reports" className="menu-item">
            Reports
          </NavLink>
          <NavLink to="/budgets" className="menu-item">
            Budgets
          </NavLink>
          <NavLink to="/settings" className="menu-item">
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
