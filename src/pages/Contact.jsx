import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navigation';
import PhotoDescription from './PhotodescriptionCont';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Navbar spécifique à la page Services */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
     <PhotoDescription/>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>à propos</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
           
          <div className="footer-section">
            <h3 id='contact'>Contact</h3>
            <p>contact@lsfxa.edu</p>
            <p>+261 34 56 789 10</p>
            <p>+261 20 22 345 67</p>
          </div>
          
          <div className="footer-section">
            <h3>Réseaux sociaux</h3>
            <div className="social-icons">
              <p>
                <a href="#"><i className="fab fa-facebook">Lycee SaintFrançois@Xavier</i></a><br/>
                <a href="#"><i className="fab fa-twitter">Lsfxa</i></a> 
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          © {new Date().getFullYear()} LSFXA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Contact;