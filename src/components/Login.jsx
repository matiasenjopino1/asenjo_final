import { Link } from "react-router-dom";
import '../styles/LoginAndRegister.css'

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          Shop<span>Store</span>
        </Link>

        <h1>¡Bienvenido nuevamente!</h1>
        <p className="auth-subtitle">
          Ingresá a tu cuenta para continuar comprando.
        </p>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresá tu contraseña"
              required
            />
          </div>

          <div className="auth-options">
            <label className="remember-option">
              <input type="checkbox" />
              Recordarme
            </label>

            <Link to="/forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        <Link to="/products">
          <button type="submit" className="auth-button">
            Iniciar sesión
          </button>
        </Link>
        </form>

        <p className="auth-footer">
          ¿Todavía no tenés una cuenta?
          <Link to="/register"> Registrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;