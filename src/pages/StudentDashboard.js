import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const StudentDashboard = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h2>Öğrenci Paneli</h2>
            {/* Diğer içerik buraya gelecek */}
            <Footer />
        </div>
    );
}

export default StudentDashboard;
