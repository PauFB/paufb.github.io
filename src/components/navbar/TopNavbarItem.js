import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TopNavbarDropdown } from './TopNavbarDropdown';

export function TopNavbarItem({ items, depthLevel }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function getItemIcon() {
    return items.icon ? <img className="navbar-top__item__icon" src={items.icon} alt="" />
                      : null;
  }

  return (
    <li
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      onClick={() => isDropdownOpen && setIsDropdownOpen(false)}
    >
      {items.submenu ? (
        <>
          <NavLink to={items.url} onClick={(e) => {e.preventDefault()}}>
            {getItemIcon()}
            {items.title}
            {depthLevel > 0 ? <span style={{ marginLeft: "0.5rem" }}>&raquo;</span> : <span className="arrow-down" style={{ marginLeft: "0.5rem" }} />}
          </NavLink>
          <TopNavbarDropdown submenus={items.submenu} depthLevel={depthLevel} isDropdownOpen={isDropdownOpen} />
        </>
      ) : (
        <>
          {items.externalUrl ? (
            <Link to={items.externalUrl} target="_blank" rel="noreferrer">
              {getItemIcon()}
              {items.title}
            </Link>
          ) : (
            <NavLink to={items.url}>
              {getItemIcon()}
              {items.title}
            </NavLink>
          )}
        </>
      )}
    </li>
  );
}
