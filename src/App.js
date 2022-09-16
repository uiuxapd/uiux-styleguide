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
      setIsShow(!isShow)
    }
    closeMenu.onclick = () => {
      setIsShow(!isShow)
    }
    document.onclick = (e) => {
      if (e.target.classList.contains('sidebar-wrapper') || e.target.classList.contains('menu-item')) {
        setIsShow(false);
      }
    }
  });

  return (
    <BrowserRouter>
      <main className="dark:bg-slate-900 dark:text-white/20 before:bg-[url(./assets/background.png)] before:bg-contain before:bg-no-repeat md:before:bg-right-top dark:before:opacity-30 before:w-[100%] before:h-[100vh] before:absolute before:top-0 before:left-0">
        <Header />
        <div className="container max-w-full flex min-h-[calc(100vh_-_4rem)]">
          <div className={`sidebar-wrapper w-full fixed inset-y-0 transition-all z-30 md:z-0 ${isShow ? 'bg-slate-600/20 backdrop-blur-sm left-0' : '-left-full'} md:w-auto md:left-0 md:top-[65px] md:bottom-0 md:border-r md:border-primary/10`}>
            <Sidebar isShow={isShow}/>
          </div>
          <div className="flex-1 p-6 md:px-10 md:ml-[240px] lg:ml-[260px]" style={{"height":"2000px"}}>
            <Routes>
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/component" element={<Component />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
