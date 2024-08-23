import React, { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Username:', username, 'Email:', email, 'Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Kullanıcı Adı:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Şifre:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Kayıt Ol</button>
        </form>
    );
}

export default RegisterForm;
