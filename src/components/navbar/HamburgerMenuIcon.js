import './Navbar.css';

export function HamburgerMenuIcon({ isSidebarOpen, onClick, width, height, backgroundColor }) {

  function handleOnClickHamburger() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={`hamburger-container ${isSidebarOpen ? "active" : ""}`} onClick={handleOnClickHamburger} style={{ width: width, height: height }}>
      <div className="line line-top" style={{ backgroundColor: backgroundColor }} />
      <div className="line line-middle" style={{ backgroundColor: backgroundColor }} />
      <div className="line line-bottom" style={{ backgroundColor: backgroundColor }} />
    </div>
  );
}
