import './home.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="home">
                <h1 style={{ color: "white" }}>¡Bienvenido a FacialTruth!</h1>
                <img src="https://i.ibb.co/Z2PwKTJ/facialtruth.png" alt="" />
                <div className='home-options'>
                    <Button
                    label="Login"
                    icon="pi pi-sort-up-fill"
                    iconPos="right"
                    onClick={() => navigate('/login')}/>
                    <Button
                    label="Register"
                    icon="pi pi-sort-down-fill"
                    iconPos="right"
                    severity="help"
                    onClick={() => navigate('/register')}/>
                </div>
            </div>
        </div>
    );
}

export default Home;