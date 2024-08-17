import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LeftNavbarDropdown } from './LeftNavbarDropdown';

export function LeftNavbarItem({ items, depthLevel, toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleOnClickItemWithSubmenu(event) {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  }

  function getItemIcon() {
    return items.icon ? <img className="navbar-left__item__icon" src={items.icon} alt="" />
                      : null;
  }

  return (
    <li className="navbar-left__item">
      {items.submenu ?  (
        <>
          <NavLink to={items.url} onClick={handleOnClickItemWithSubmenu}>
            {getItemIcon()}
            {items.title}
            <span className={isDropdownOpen ? "arrow-down" : "arrow-right"} style={{ marginLeft: "0.5rem" }} />
          </NavLink>
          <LeftNavbarDropdown submenus={items.submenu} depthLevel={depthLevel} isDropdownOpen={isDropdownOpen} toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <>
          <NavLink to={items.url} onClick={toggleSidebar}>
            {getItemIcon()}
            {items.title}
          </NavLink>
        </>
      )}
    </li>
  );
}
