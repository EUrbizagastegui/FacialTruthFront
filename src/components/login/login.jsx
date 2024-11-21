import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './Login.css';
import LoginAnimation from './LoginAnimation'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejar el envío del formulario
        if (username === 'admin' && password === 'admin') {
            navigate('/');
        } else {
            setError(true);
        }
    };

    const hideDialog = () => {
        setError(false);
    };

    return (
        <div id="large-header" className="login-background">
            <canvas id="demo-canvas"></canvas>
            <LoginAnimation /> 
            <div className="login-card-container">
                <Card className="p-shadow-5">
                    <div className="login-title">Login</div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-field">
                            <label htmlFor="username" className="login-label">Username</label>
                                <InputText
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="p-inputtext-lg"
                                    style={{ width: '100%' }}
                                />
                        </div>
                        <div className="p-field">
                            <label htmlFor="password" className="login-label">Password</label>
                                <Password
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    feedback={false}
                                    className="p-inputtext-lg"
                                    style={{ width: '100%' }}
                                />
                        </div>
                        <div className="button-container">
                            <Button type="submit" label="Login" icon="pi pi-check" className="p-button-primary" style={{ width: '48%' }} />
                            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" style={{ width: '48%' }} onClick={() => navigate('/')} />
                        </div>
                    </form>
                </Card>
            </div>
            <Dialog header="Error" visible={error} style={{ width: '50vw' }} footer={<Button label="Cancel" icon="pi pi-times" onClick={hideDialog} />} onHide={hideDialog}>
                <p>Credenciales Incorrectas</p>
            </Dialog>
        </div>
    );
}

export default Login;