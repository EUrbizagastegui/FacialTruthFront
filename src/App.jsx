import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import './App.css'
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';

function App() {

  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  )
}

export default App
