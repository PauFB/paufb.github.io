import { TopNavbarItem } from "./TopNavbarItem";

export function TopNavbarDropdown({ submenus, depthLevel, isDropdownOpen }) {
  depthLevel++;
  return (
    <ul className={`dropdown-menu-navbar-top
                    ${isDropdownOpen ? "open" : ""}
                    ${depthLevel > 1 ? "dropdown-submenu" : ""}`}>
      {submenus.map((submenu, index) => (
        <TopNavbarItem items={submenu} depthLevel={depthLevel} key={submenu.url} />
      ))}
    </ul>
  );
}
