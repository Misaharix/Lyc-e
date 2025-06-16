import './App.css';
import Home from './pages/Home';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Actualite from './pages/actualite';
import Sport from './pages/Sport';
import Service from './pages/Service';
import Responsable from './pages/Responsable'
import {ThemeProvider} from './pages/context';
import Contact from './pages/Contact';
import Connexion from './pages/Connexion'

const App = () => {
  return(
    <ThemeProvider>
   <BrowserRouter>
    {/* <NavLink to="/">Accueil</NavLink> */}
    <Routes>
      <Route path="/" element={<Home/>}/> {/*le path:/ signifie la page principal*/}
      <Route path="/service" element={<Service/>}/>
      <Route path="/responsable" element={<Responsable/>}/>
       <Route path="/actualite" element={<Actualite/>}/>{/*elementt ilay composant*/}
       <Route path="/sport" element={<Sport/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/connexion" element={<Connexion/>}/>
    </Routes>
   </BrowserRouter>
   </ThemeProvider>
  )
};

export default App;