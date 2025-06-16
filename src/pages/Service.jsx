import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navigation';
import Gallery from '../pages/GalleryBaseProj';

const Services = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  

    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);  /*Appel vers Home pour scrolling direction vers id */
  

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      
      {/* Navbar spécifique à la page Services */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
         
      {/* Contenu de la page Services */}
      <main className="main-content">
        <section id="cours" className="service-section">
          <h2>Nos Cours</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Mathématiques</h3>
              <p>Programme complet conforme aux exigences nationales</p>
            </div>
            <div className="service-card">
              <h3>Physiques</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            <div className="service-card">
              <h3>Sciences De la Vie Et de la Terre</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            <div className="service-card">
              <h3>Malagasy</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            <div className="service-card">
              <h3>Anglais</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            <div className="service-card">
              <h3>Eva</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            <div className="service-card">
              <h3>Allemand</h3>
              <p>Laboratoire équipé pour les travaux pratiques</p>
            </div>
            
            <div className="service-card">
              <h3>Français</h3>
              <p>Programme approfondi avec soutien linguistique</p>
            </div>
            <div className="service-card">
              <h3>Histo-Geo</h3>
              <p>Programme approfondi sur l'histoire du monde et geographie madagascar</p>
            </div>
          </div>

          <h2 id="projets">Nos Projets</h2>
          <Gallery/>
        </section>

      </main>
      
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

export default Services;