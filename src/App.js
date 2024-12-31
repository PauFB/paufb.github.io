import './App.css';
import './fonts.css'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { HomePage } from './components/pages/home/HomePage';

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
        <Route path="games" />
      </Routes>
    </>
  );
}

export default App;
