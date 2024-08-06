import { LeftNavbarItem } from './LeftNavbarItem';

export function LeftNavbarDropdown({ submenus, depthLevel, isDropdownOpen, toggleSidebar }) {
  depthLevel++;
  return (
    <ul className={`dropdown-menu-navbar-left
                    ${isDropdownOpen ? "open" : ""}
                    ${depthLevel > 1 ? "dropdown-submenu-navbar-left" : ""}`}>
      {submenus.map((submenu, index) => (
        <LeftNavbarItem items={submenu} depthLevel={depthLevel} toggleSidebar={toggleSidebar} key={submenu.url} />
      ))}
    </ul>
  );
}
