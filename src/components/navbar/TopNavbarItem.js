import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import './TopNavbarItem.css';

export function TopNavbarItem({ items, depthLevel }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      onClick={() => isDropdownOpen && setIsDropdownOpen(false)}
    >
      {items.submenu ? (
        <>
          <NavLink to={items.url} onClick={(e) => {e.preventDefault()}}>
            {items.title}
            {depthLevel > 0 ? (<span className="arrow-right">&raquo;</span>) : (<span className="arrow-down" />)}
          </NavLink>
          <Dropdown submenus={items.submenu} depthLevel={depthLevel} isDropdownOpen={isDropdownOpen} />
        </>
      ) : (
        <NavLink to={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
}
