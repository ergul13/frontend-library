import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar bileşeni
import Sidebar from './components/Sidebar'; // Sidebar bileşeni
import Hero from './Hero'; // Hero bileşeni
import Submenu from './Submenu'; // Submenu bileşeni

import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AuthorDashboard from './pages/AuthorDashboard';
import StaffDashboard from './pages/StaffDashboard';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Hero />      
            <Submenu />   
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/author" element={<AuthorDashboard />} />
                <Route path="/staff" element={<StaffDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
