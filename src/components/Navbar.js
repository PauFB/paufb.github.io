import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HamburgerMenuIcon } from '../assets/hamburger-menu-icon.svg';
import './Navbar.css';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className="inline-container">
        <HamburgerMenuIcon className="hamburger" onClick={toggleSidebar} />
        <nav className="navbar-top">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="navbar-left" style={{ display: isSidebarOpen ? "inherit" : "none" }}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}