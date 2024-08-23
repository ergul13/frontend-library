import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h2>Admin Paneli</h2>
            {/* Diğer içerik buraya gelecek */}
            <Footer />
        </div>
    );
}

export default AdminDashboard;
