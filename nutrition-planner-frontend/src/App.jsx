import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Aihelper from './pages/aihelper';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
     <div className="min-h-screen flex flex-col">
     <Navbar />
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/aihelper" element={<Aihelper />} />
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </Router>
  );
}
export default App;
