import { Link } from "react-router-dom";
import '../styles/LoginAndRegister.css'
function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card register-card">
        <Link to="/" className="auth-logo">
          Shop<span>Store</span>
        </Link>

        <h1>Crear una cuenta</h1>
        <p className="auth-subtitle">
          Registrate y comenzá a disfrutar de nuestra tienda.
        </p>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingresá tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Correo electrónico</label>
            <input
              type="email"
              id="register-email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Contraseña</label>
            <input
              type="password"
              id="register-password"
              placeholder="Creá una contraseña"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Repetí tu contraseña"
              required
            />
          </div>

          <label className="terms-option">
            <input type="checkbox" required />
            Acepto los términos y condiciones
          </label>

          <button type="submit" className="auth-button">
            Crear cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tenés una cuenta?
          <Link to="/login"> Iniciá sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;