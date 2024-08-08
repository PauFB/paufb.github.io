import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Weapons as FFVIIECWeapons } from './components/pages/games/final-fantasy-vii-ever-crisis/weapons/Weapons';
import { Home } from './components/pages/home/Home';
import './App.css';

function App() {
  const [isViewportNarrow, setIsViewportNarrow] = useState(getIsViewportNarrow());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  });

  function getIsViewportNarrow() {
    return window.innerWidth < 800;
  }

  function updateLayout() {
    setIsViewportNarrow(getIsViewportNarrow());
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""} ${isViewportNarrow ? "narrow" : ""}`}>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isNarrow={isViewportNarrow} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games">
            <Route path="final-fantasy-vii-ever-crisis">
              <Route path="weapons" element={<FFVIIECWeapons />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
