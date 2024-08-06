import { Link, NavLink } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { navbarItemsDataWithFullUrls } from './navbarItemsData';
import { TopNavbarItem } from './TopNavbarItem';
import { ReactComponent as GithubLogo } from '../../assets/github-logo.svg';
import './Navbar.css';

export function Navbar({ isSidebarOpen, toggleSidebar, isNarrow }) {
  const depthLevel = 0;
  return (
    <>
      <div className="inline-container">
        <HamburgerMenuIcon onClick={toggleSidebar} width="2em" height="2em" backgroundColor="#ffffff" />
        <nav className="navbar-top" style={{display: isNarrow ? "none" : ""}}>
          <ul>
            {navbarItemsDataWithFullUrls.map((item, index) => {
              return (
                <TopNavbarItem items={item} depthLevel={depthLevel} key={item.url} />
              );
            })}
          </ul>
        </nav>
        <Link to={"https://github.com/PauFB"} target="_blank" rel="noreferrer" className={`navbar-github-logo ${isNarrow ? "centered" : ""}`}>
          <GithubLogo />
        </Link>
      </div>
      <nav className={`navbar-left ${isSidebarOpen ? "open" : ""} ${isNarrow ? "narrow" : ""}`}>
        <ul>
          {navbarItemsDataWithFullUrls.map((item, index) => {
            return (
              <li className="menu-item" key={item.url}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
