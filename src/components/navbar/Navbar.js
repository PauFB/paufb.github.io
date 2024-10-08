import { Link } from 'react-router-dom';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { navbarItemsDataWithFullUrls } from './navbarItemsData';
import { TopNavbarItem } from './TopNavbarItem';
import { LeftNavbarItem } from './LeftNavbarItem';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import './Navbar.css';

export function Navbar({ isSidebarOpen, toggleSidebar, isNarrow }) {
  const depthLevel = 0;
  return (
    <>
      <header className="navbar-header">
        <HamburgerMenuIcon isSidebarOpen={isSidebarOpen} onClick={toggleSidebar} width="2em" height="2em" backgroundColor="#ffffff" />
        <nav className="navbar-top" style={{ display: isNarrow ? "none" : null }}>
          <ul>
            {navbarItemsDataWithFullUrls.map(item =>
              <TopNavbarItem items={item} depthLevel={depthLevel} key={item.url} />
            )}
          </ul>
        </nav>
        <div className="navbar-top__links">
          <Link to={"https://github.com/PauFB"} target="_blank" rel="noreferrer" className="navbar-top__github">
            <GithubLogo className="navbar-top__github__logo" />
          </Link>
        </div>
      </header>
      <nav className={`navbar-left ${isSidebarOpen ? "navbar-left--open" : ""} ${isNarrow ? "navbar-left--narrow" : ""}`}>
        <ul>
          {navbarItemsDataWithFullUrls.map(item =>
            <div className="navbar-left__item-container" key={item.url}>
              <LeftNavbarItem items={item} depthLevel={depthLevel} toggleSidebar={toggleSidebar} key={item.url} />
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
