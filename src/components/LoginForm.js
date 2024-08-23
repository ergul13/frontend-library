import React, { useState, useRef } from 'react'; 


const LoginForm = () => {
    const usernameRef = useRef(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username, 'Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Kullanıcı Adı:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Şifre:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Giriş Yap</button>
        </form>
    );
}

export default LoginForm;
