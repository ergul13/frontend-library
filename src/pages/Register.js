import React from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const Register = () => {
    return (
        <div>
            <Navbar />
            <h2>Kayıt Ol</h2>
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default Register;
