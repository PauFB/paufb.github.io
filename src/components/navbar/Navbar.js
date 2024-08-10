import { Link } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { navbarItemsDataWithFullUrls } from './navbarItemsData';
import { TopNavbarItem } from './TopNavbarItem';
import { LeftNavbarItem } from './LeftNavbarItem';
import { ReactComponent as GithubLogo } from '../../assets/github-logo.svg';
import './Navbar.css';

export function Navbar({ isSidebarOpen, toggleSidebar, isNarrow }) {
  const depthLevel = 0;
  return (
    <>
      <div className="inline-container">
        <HamburgerMenuIcon isSidebarOpen={isSidebarOpen} onClick={toggleSidebar} width="2em" height="2em" backgroundColor="#ffffff" />
        <nav className="navbar-top" style={{display: isNarrow ? "none" : ""}}>
          <ul>
            {navbarItemsDataWithFullUrls.map((item, index) =>
              <TopNavbarItem items={item} depthLevel={depthLevel} key={item.url} />
            )}
          </ul>
        </nav>
        <Link to={"https://github.com/PauFB"} target="_blank" rel="noreferrer" className={`navbar-github-logo ${isNarrow ? "centered" : ""}`}>
          <GithubLogo />
        </Link>
      </div>
      <nav className={`navbar-left ${isSidebarOpen ? "open" : ""} ${isNarrow ? "narrow" : ""}`}>
        <ul>
          {navbarItemsDataWithFullUrls.map((item, index) =>
            <div className="navbar-left__item-container">
              <LeftNavbarItem items={item} depthLevel={depthLevel} toggleSidebar={toggleSidebar} key={item.url} />
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
