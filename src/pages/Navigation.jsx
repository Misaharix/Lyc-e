// src/components/Navbar.js
import { Link } from 'react-router-dom';
import SFX from '../Images/SFX.png';
import '../App.css';


const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="Sfx">
        <Link to="/">
          <img 
            src={SFX}
            alt="Logo LSFXA" 
            style={{
              width: "50px",
              height: "45px"
            }}
          />
        </Link>
        <p>Lycée Saint François Xavier Antanimena</p>
      </div>
      
      <ul className="navbar-links">
        
        <li className="navbar-links"><Link to="/">Accueil</Link></li>
        <li className="navbar-links"><Link to="/service">Services</Link></li>
        <li className="navbar-links"><Link to="/actualite">Actualité</Link></li>
        <li className="navbar-links"><Link to="/responsable">Responsable</Link></li>
        <li className="navbar-links"><Link to="/sport">Sport</Link></li>
        <li className="navbar-links"><Link to="/contact">Contact</Link></li>
        
        <li>
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
        </li>
        </ul>
        <li> <Link to="/Connexion"><button className="login-btn">Se connecter</button></Link>
        </li>
         
      
    </nav>
    
  );
};

export default Navbar;