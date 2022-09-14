import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Documentation from './pages/Documentation'
import Component from './pages/Component'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="container max-w-full flex min-h-[calc(100vh_-_4rem)]">
          <div className="w-[260px] border-r-[1px] border-slate-200 py-6 px-10">
            <Sidebar />
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
