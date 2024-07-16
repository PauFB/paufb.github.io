import { NavLink } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import './Navbar.css';

export const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
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
      <nav className={`navbar-left ${isSidebarOpen ? "navbar-left-open" : ""}`} >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}