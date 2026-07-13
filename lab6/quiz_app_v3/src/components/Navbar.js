import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="navbar-nav w-100 d-flex justify-content-start gap-4 ps-3">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link text-dark fw-bold" : "nav-link text-secondary"}>Home</NavLink>
          <NavLink to="/about" className="nav-link text-secondary">About</NavLink>
          <NavLink to="/news" className="nav-link text-secondary">News</NavLink>
          <NavLink to="/quizzes" className={({isActive}) => isActive ? "nav-link text-dark fw-bold" : "nav-link text-secondary"}>Quiz</NavLink>
          <NavLink to="/contact" className="nav-link text-secondary">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
