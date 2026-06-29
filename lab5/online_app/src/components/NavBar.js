import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-light mb-3 px-3">
      <ul className="navbar-nav d-flex flex-row gap-4 ms-2">
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`} 
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`} 
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`} 
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`} 
            to="/quizzes"
          >
            Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`} 
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;