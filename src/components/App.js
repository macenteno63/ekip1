import '../styles/pages/App.css';
import Formulaire from '../pages/Formulaire.js'
import Erreur from '../pages/Erreur.js'
import Reinit from '../pages/ReinitialisationMdp.js'
import Accueil from '../pages/Accueil.js'
import Profil from '../pages/Profil.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // ce qui englobe notre application
    <BrowserRouter> 
      <Routes>
        {/* # si c'est l'accueil du site alors on affiche le Formulaire */}
        <Route path="/" element={<Formulaire />} /> 
        {/* # si le chemin est reinitialisationMdp on affiche le composant Reinit */}
        <Route path="/reinitialisationMdp" element={<Reinit />} /> 
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        {/* # si jamais l'url est inconnu on affiche une erreur 404 */}
        <Route path="*" element={<Erreur />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
