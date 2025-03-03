import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MealPlanner from './pages/MealPlanner';
import Detail from "./pages/Detail";
import Aihelper from './pages/aihelper';
import { MealPlanProvider } from './context/MealPlanContext';

function App() {
  return (
    <MealPlanProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/aihelper" element={<Aihelper />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
          </Routes>
        </div>
      </Router>
    </MealPlanProvider>
  );
}

export default App;
