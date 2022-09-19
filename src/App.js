import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Sidebar from "./components/Sidebar";
import Documentation from './pages/Documentation'
import Component from './pages/Component'
import Buttons from "./pages/Buttons";
import Typography from "./pages/Typography";

const App = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    // Sidebar
    const openMenu = document.querySelector('.menu-btn')
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
    
    // Breadcrumbs
    const activeMenu = document.querySelector(".menu-item.active");
    const breadcrumbs = document.querySelector(".breadcrumbs");
    const categoryText = document.querySelector(".category");
    const pageText = document.querySelector(".page");
    
    if (activeMenu) {
      categoryText.innerHTML = activeMenu.getAttribute("category");
      pageText.innerHTML = activeMenu.textContent;
      breadcrumbs.classList.remove("hidden");
    }
    
    if (!activeMenu) {
      breadcrumbs.classList.add("hidden");
    }

  },[isShow]);

  return (
    <HashRouter>
      <main>
        <Header />
        <div className="content-wrapper">
          <div className={`sidebar-wrapper  ${isShow ? 'bg-slate-600/20 backdrop-blur-sm left-0' : '-left-full'} md:left-0 `}>
            <Sidebar isShow={isShow}/>
          </div>
          <div className="content">
            <Routes>
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/component" element={<Component />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/typography" element={<Typography />} />
            </Routes>
          </div>
        </div>
      </main>
    </HashRouter>
  );
};

export default App;
