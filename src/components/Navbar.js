import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import './Navbar.css';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className="inline-container">
        <HamburgerMenuIcon onClick={toggleSidebar} width="2em" height="2em" backgroundColor="#ffffff" />
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