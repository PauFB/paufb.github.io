import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Weapons as FFVIIECWeapons } from './components/pages/games/final-fantasy-vii-ever-crisis/weapons/Weapons';
import { Home } from './components/pages/home/Home';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
