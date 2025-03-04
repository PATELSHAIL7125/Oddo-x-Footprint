import React from 'react';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import Aihelper from './pages/aihelper';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Mealplanner from './pages/MealPlanner'
import { MealPlanProvider } from './context/MealPlanContext';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

// Layout component with Navbar
const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
    <MealPlanProvider>
      <Routes>
        {/* Public routes without Navbar */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* About page with Navbar */}
        <Route element={<NavbarLayout />}>
          <Route path="/about" element={<About />} />
        </Route>
        
        {/* Protected routes with Navbar */}
        <Route element={<ProtectedRoute />}>
          <Route element={<NavbarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/aihelper" element={<Aihelper />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal-planner" element={<Mealplanner />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
      </MealPlanProvider>
    </AuthProvider>
  );
}

export default App;
