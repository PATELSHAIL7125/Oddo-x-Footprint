import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Aihelper from './pages/aihelper';
import MealPlanner from './pages/MealPlanner';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <AuthProvider>
    <Router>
     <div className="min-h-screen flex flex-col">
     <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/detail" element={<Detail />} />
          <Route path="/aihelper" element={<Aihelper />} />
          <Route path="/mealplanner" element={<MealPlanner />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        </Routes>
        </div>
    </Router>
    </AuthProvider>
  );
}
export default App;
