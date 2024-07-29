import { useState } from 'react';
import './HamburgerMenuIcon.css';

export const HamburgerMenuIcon = ({width, height, backgroundColor, onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsActive(!isActive);
  }

  const onClickWrapper = () => {
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