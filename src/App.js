import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { WeaponsPage as FFVIIECWeapons } from './components/pages/games/final-fantasy-vii-ever-crisis/weapons/WeaponsPage';
import { InventoryPage as FFXIIIInventoryPage } from './components/pages/games/final-fantasy-xiii/InventoryPage';
import { HomePage } from './components/pages/home/HomePage';
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
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isNarrow={isViewportNarrow} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="games">
          <Route path="final-fantasy-vii-ever-crisis" element={<FFVIIECWeapons isViewportNarrow={isViewportNarrow} />} />
          <Route path="final-fantasy-xiii" element={<FFXIIIInventoryPage isViewportNarrow={isViewportNarrow} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
