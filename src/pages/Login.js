import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div>
            <Navbar />
            <h2>Giriş Yap</h2>
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;
