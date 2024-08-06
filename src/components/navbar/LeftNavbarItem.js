import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LeftNavbarDropdown } from './LeftNavbarDropdown';
import './LeftNavbarItem.css';

export function LeftNavbarItem({ items, depthLevel, toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleOnClickItemWithSubmenu(event) {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <li className="menu-item">
      {items.submenu ?  (
        <>
          <NavLink to={items.url} onClick={handleOnClickItemWithSubmenu}>
            {items.title}
            <span className={`arrow-down ${isDropdownOpen ? "" : "rotated-right"}`} />
          </NavLink>
          <LeftNavbarDropdown submenus={items.submenu} depthLevel={depthLevel} isDropdownOpen={isDropdownOpen} toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <NavLink to={items.url} onClick={toggleSidebar}>{items.title}</NavLink>
      )}
    </li>
  );
}
