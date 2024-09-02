import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Weapons as FFVIIECWeapons } from './components/pages/games/final-fantasy-vii-ever-crisis/weapons/Weapons';
import { WeaponsPage as FFXIIIWeaponsPage } from './components/pages/games/final-fantasy-xiii/InventoryPage';
import { Home } from './components/pages/home/Home';
import './App.css';

function App() {
  const [isViewportNarrow, setIsViewportNarrow] = useState(getIsViewportNarrow());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    function updateLayout() {
      setIsViewportNarrow(getIsViewportNarrow());
    }
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  function getIsViewportNarrow() {
    return window.innerWidth < 800;
  }

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`app-container ${isViewportNarrow ? "app-container--narrow" : ""}`}>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isNarrow={isViewportNarrow} />
      <div className={`app-container__page-container ${isSidebarOpen ? "app-container__page-container--sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games">
            <Route path="final-fantasy-vii-ever-crisis">
              <Route path="weapons" element={<FFVIIECWeapons isViewportNarrow={isViewportNarrow} />} />
            </Route>
            <Route path="final-fantasy-xiii" element={<FFXIIIWeaponsPage isViewportNarrow={isViewportNarrow} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
