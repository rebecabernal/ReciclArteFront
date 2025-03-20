import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginService } from '../../services/AuthService'; 
import { AuthContext } from '../../context/Authcontext';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userData = await loginService(email, password);
      login(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/homepage');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Iniciar Sesión</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/register" className="register-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
