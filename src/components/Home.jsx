import { Link } from 'react-router-dom';
import '../styles/Home.css'
function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenido</h1>
            <p className="home-subtitle">Selecciona una opcion para continuar</p>

            <div className="cards-container">
                <Link to="/login">
                    <div className="home-card login-card">
                        <span className="card-icon">🔐</span>
                        <h2>Login</h2>
                        <p>Ingresa a tu cuenta</p>
                    </div>
                </Link>
                <Link to="/register">
                    <div className="home-card register-card">
                        <span className="card-icon">✨</span>
                        <h2>Registro</h2>
                        <p>Crea una cuenta nueva</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Home;