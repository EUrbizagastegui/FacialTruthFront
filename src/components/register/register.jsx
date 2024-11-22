import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*try {
          await axios.post('http://localhost:5000/api/users/register', { username, password, firstName, lastName, email });
          setOpen(true);
        } catch (error) {
          alert('Error registering user');
        }*/
       setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
        navigate('/');
    };

    return (
        <div className="background">
          <Card className="card">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="p-fluid">
                <div className="field">
                  <InputText
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder='First Name *'
                  />
                </div>
                <div className="field">
                  <InputText
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder='Last Name *'
                  />
                </div>
                <div className="field">
                  <InputText
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email *'
                  />
                </div>
                <div className="field">
                  <InputText
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder='Username *'
                  />
                </div>
                <div className="field">
                  <Password
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='Password *'
                  />
                </div>
              </div>
              <div className="button-group">
                <Button label="Register" 
                type="submit" 
                className="p-button-primary" 
                icon = 'pi pi-check'
                />
                <Button
                  label="Cancel"
                  className="p-button-secondary"
                  icon = 'pi pi-times'
                  onClick={() => navigate('/')}
                />
              </div>
            </form>
          </Card>
    
          <Dialog
            header="Success"
            visible={open}
            style={{ width: '400px' }}
            onHide={handleClose}
          >
            <p>Usuario Registrado Exitosamente</p>
            <Button label="OK" onClick={handleClose} autoFocus />
          </Dialog>
        </div>
    );
}

export default Register;