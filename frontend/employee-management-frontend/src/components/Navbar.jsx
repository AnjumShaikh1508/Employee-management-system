import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">EMS</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Employee List</Link>
          </li>
          <li className="navbar-item">
            <Link to="/add" className="navbar-link">Add Employee</Link>
          </li>
          <li className="navbar-item">
            <Link to="/reports" className="navbar-link">Reports</Link>
          </li>
          <li className="navbar-item">
            <Link to="/settings" className="navbar-link">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;