import  { useState,useEffect } from 'react';
import '../App.css';
import LSFX from '../Images/images.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navigation';
import Gallery from '../pages/Gallerytest';


const Home = () => {
  const [darkMode, setDarkMode] = useState(true);  // c'est qui permet par defaut de la couleur 

  const toggleTheme = () => {
    setDarkMode(!darkMode);          // qui permet a l utilisateur de faire un switch 
  };

  const [showWelcomePopup, setShowWelcomePopup] = useState(true); // État pour la popup

  // Fermer la popup après 5 secondes ou quand l'utilisateur clique
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowWelcomePopup(false);
  };

    // Fonction pour faire défiler jusqu'à la section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>

          {/* Popup de bienvenue */}  
          {showWelcomePopup && (
        <div className="welcome-popup">      
          <div className="popup-content">   
            <h2>Tongasoa eto Sekolintsika</h2>
            <p>LSFXA</p>         
            <button onClick={closePopup} className="popup-close-btn">
              Entrer
            </button>
          </div>        
        </div>               
      )}                                                
               
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
       
      
         
      {/* Hero Section  */}
      
   <section 
  className="hero" 
  id='accueil'
  style={{
    backgroundImage: `url(${LSFX})`,
    backgroundSize: 'cover',                      
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '50vh'
  }}
>                                                     {/*Fond de base Accueil*/}
  <div className="hero-content">
    <h1>Lycée Saint François Xavier</h1>
    <p>Défi-Don-Dignité</p>
    <Link to="/actualite">
      <button className="cta-btn">Explorer</button>
    </Link>
  </div>
  


</section>
      
      {/* Main Content */}
      
      <main className="main-content">         {/* Nos services  */}
     
        <h2 id='services'>Ny Sekolitsika</h2>
           
         {/*nisy grid teto taloha */}

          <Link 
  to={{
    pathname: "/service",
    hash: "#cours"  // Ajoutez ceci pour l'ancre // Ici c'est le link de l id sur la page Service
  }} 
  className="service-link"
 >
  
          <div className="service-card">
             <h3 >Nos Cours</h3>
            <p>Cours Qui suit le programme de l'Etat</p>
          </div>
           </Link> 

 <Link to="/responsable" className="service-link">      
          <div className="service-card">
            <h3>Nos Responsable</h3>
            <p>Pedagogie-Comptable-Bibiothèque</p>
          </div>
  </Link>   
           
           
          <div className="service-card">
            <h3>Nos Professeurs</h3> 
            <p>Chargé(e) du développement des connaissances de ses élèves</p>
          </div>

           <Link 
  to={{
    pathname: "/service",
    hash: "#projets"  // Ajoutez ceci pour l'ancre c est id dans la page service redurectuon dans la page service
  }} 
  className="service-link"
>
 
          <div className="service-card">
            <h3>Nos Projets</h3> 
            <p>Developpement Durable pour l'école</p>
          </div> 
           </Link>
        
        <Link to="/Sport" className="service-link">
           <div className="service-card">
            <h3>Sport</h3> 
            <p>Lycée qui consacre ls eleve au sein su sport</p>
          </div>
          </Link>
 
       <div id="2ndP">
        <h2>Sfx Au sein Developpement</h2>
        <Gallery/>
        </div>
       </main>
       
      
      
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>à propos</h3>
            <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="/actualite">À propos</a></li>
              <li><a href="/service">Services</a></li>
            </ul>
          </div>
           
          <div className="footer-section">
            <h3 id='contact'>Contact</h3>
            <p>contact@monsite.com</p>
            <p>+1 234 567 890</p>
            <p>+1 234 567 4590</p>
          </div>
          
          <div className="footer-section">
            <h3>Réseaux sociaux</h3>
            <div className="social-icons">
              
            <p> <a href="#"><i className="fab fa-facebook">LyceeSaintFrançois@Xavier</i></a> <br/>
             <a href="#"><i className="fab fa-twitter">Lsfxa</i></a> 
             <a href="#"><i className="fab fa-instagram"></i></a> 
             </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          © {new Date().getFullYear()} Lsfxa. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Home;