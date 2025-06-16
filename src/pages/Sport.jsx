import { useState } from 'react';
import '../App.css';
import Gallery from '../pages/GalleryBaseSport';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navigation';


const Sport = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Navbar spécifique à la page Services */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
         
      <Gallery/>
       
          
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
                <a href="#"><i className="fab fa-facebook">LyceeSaintFrançois@Xavier</i></a><br/>
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

export default Sport;