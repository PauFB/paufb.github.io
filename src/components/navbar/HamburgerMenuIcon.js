import { useState } from 'react';
import './HamburgerMenuIcon.css';

export function HamburgerMenuIcon({ width, height, backgroundColor, onClick }) {
  const [isActive, setIsActive] = useState(false);

  function toggleHamburgerMenu() {
    setIsActive(!isActive);
  }

  function onClickWrapper() {
    if (onClick) {
      onClick();
    }
    toggleHamburgerMenu();
  }

  return (
    <div className={`hamburger-container ${isActive ? "active" : ""}`} onClick={onClickWrapper} style={{ width: width, height: height }}>
      <div className="line line-top" style={{ backgroundColor: backgroundColor }} />
      <div className="line line-middle" style={{ backgroundColor: backgroundColor }} />
      <div className="line line-bottom" style={{ backgroundColor: backgroundColor }} />
    </div>
  );
}
