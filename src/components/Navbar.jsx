import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Tienda <span>Tecno</span>
                </Link>
                <div className="navbar-links">
                    <NavLink to="/products">Productos</NavLink>
                    <div>
                       <Link to="/login" className="login-link">
                       Iniciar Sesion
                       </Link> 
                       <Link to="/register" className="register-button">
                       Registrarse
                       </Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;