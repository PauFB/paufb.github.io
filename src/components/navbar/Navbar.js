import { NavLink } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { navbarItemsDataWithFullUrls } from './navbarItemsData';
import { TopNavbarItem } from './TopNavbarItem';
import './Navbar.css';

export const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const depthLevel = 0;
  return (
    <>
      <div className="inline-container">
        <HamburgerMenuIcon onClick={toggleSidebar} width="2em" height="2em" backgroundColor="#ffffff" />
        <nav className="navbar-top">
          <ul>
            {navbarItemsDataWithFullUrls.map((item, index) => {
              return (
                <TopNavbarItem items={item} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
      <nav className={`navbar-left ${isSidebarOpen ? "navbar-left-open" : ""}`}>
        <ul>
          {navbarItemsDataWithFullUrls.map((item, index) => {
            return (
              <li className="menu-item">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}