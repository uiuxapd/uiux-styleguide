import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Sidebar from "./components/Sidebar";
import Documentation from "./pages/Documentation";
import Buttons from "./pages/Buttons";
import Typography from "./pages/Typography";
import Tables from "./pages/Tables";
import Search from './components/Search'
import Colors from "./pages/Colors";
import Alerts from "./pages/Alerts";
import Steps from "./pages/Steps";
import Introduction from "./pages/Introduction";
import ProgressBar from "./pages/ProgressBar";


const App = () => {
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    // Sidebar
    const openMenu = document.querySelector(".menu-btn");
    const closeMenu = document.querySelector(".close-menu");

    openMenu.onclick = () => {
      setIsShow(!isShow);
    };

    closeMenu.onclick = () => {
      setIsShow(!isShow);
    };

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

    // Popup Search
    const btnSearch = document.querySelector(".search");
    btnSearch.onclick = () => {
      setSearch(true);
    };

    document.onclick = (e) => {
      if (
        e.target.classList.contains("sidebar-wrapper") ||
        e.target.classList.contains("menu-item")
      ) {
        setIsShow(false);
      }

      if (e.target.classList.contains("menu-item")) {
        window.scrollTo({
          top: 0
        })
      }

      if (e.target.classList.contains("search-popup")) {
        setSearch(false);
      }
    };

  }, [isShow]);

  document.onscroll = () => {
    const positionScroll = window.scrollY;
    const navigation = document.querySelector("nav");
    if (positionScroll > 40) {
      navigation.classList.add("bg-white");
      navigation.classList.add("dark:bg-slate-900");
    } else {
      navigation.classList.remove("bg-white");
      navigation.classList.remove("dark:bg-slate-900");
    }
  };

  return (
    <HashRouter>
      <main>
        <Header />
        <div className="content-wrapper">
          <div className={`sidebar-wrapper ${isShow ? "open" : ""}`}>
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/introduction" replace /> } />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/progressbar" element={<ProgressBar />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/steps" element={<Steps />} />
            </Routes>
          </div>
        </div>
        {search ? <Search /> : ""}
      </main>
    </HashRouter>
  );
};

export default App;
