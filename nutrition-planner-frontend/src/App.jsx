import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Detail from "./pages/Detail";
import Aihelper from './pages/aihelper';
import MealPlanner from './pages/MealPlanner';

function App() {
  return (
    <Router>
     
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/detail" element={<Detail />} />
          <Route path="/aihelper" element={<Aihelper />} />
          <Route path="/mealplanner" element={<MealPlanner />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      
    </Router>
  );
}
export default App;
