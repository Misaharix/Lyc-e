import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SFX from '../Images/SFX.png';
import '../pages/Auth.css';

const Login = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur de connexion');
      }

      // Stockage du token
      localStorage.setItem('authToken', data.access_token);
      navigate('/dashboard'); // Redirection après connexion

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Navbar simplifiée */}
      <nav className="navbar">
        <div className="Sfx">
       <Link to="/">  <img src={SFX} alt="Logo LSFXA" style={{ width: "50px", height: "45px" }} /> </Link> 
          <p>Lycée Saint François Xavier Antanimena</p>
        </div>
        <div>
          <label className="theme-switch">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="slider round">
              <span className="icon">{darkMode ? '🌙' : '☀️'}</span>
            </span>
          </label>
        </div>
      </nav>

      {/* Formulaire de connexion */}
      <main className="login-container">
        <div className="login-card">
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" disabled={loading} className="login-btn">
              {loading ? 'Connexion en cours...' : 'Se connecter'} {/* Deux choix sera disponible affecter vers loading*/}
            </button>
          </form>
        </div>
      </main>

      {/* Footer identique */}
      <footer className="footer">
        {/* ... */}
      </footer>
    </div>
  );
};

export default Login;