import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Sidebar from "./components/Sidebar";
import Documentation from './pages/Documentation'
import Component from './pages/Component'

const App = () => {
  const [isShow, setIsShow] = useState(false)

  // Show / Hide Sidebar
  useEffect(() => {
    const openMenu = document.querySelector('.menu-button')
    const closeMenu = document.querySelector('.close-menu')
    openMenu.onclick = () => {
      setIsShow(true)
    }
    closeMenu.onclick = () => {
      setIsShow(false)
    }
    document.onclick = (e) => {
      if (e.target.classList.contains('sidebar-wrapper') || e.target.classList.contains('menu-item')) {
        setIsShow(false)
      }
    }
  });

  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="container max-w-full flex min-h-[calc(100vh_-_4rem)]">
          <div className={`sidebar-wrapper w-full bg-black/20 backdrop-blur-sm absolute inset-y-0 transition-all ${isShow ? 'left-0' : '-left-full'} md:w-auto md:relative md:left-0 md:border-r md:border-slate-200`}>
            <Sidebar isShow={isShow}/>
          </div>
          <div className="flex-1 py-6 px-10">
            <Routes>
              <Route path="/docs" element={<Documentation />} />
              <Route path="/component" element={<Component />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
