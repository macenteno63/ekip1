import '../styles/App.css';
import Formulaire from './formulaire.js'
import Erreur from './erreur.js'
import Reinit from './reinitialisationMdp'
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulaire/>}/> # si c'est l'accueil du site alors on affiche le Formulaire
        <Route path="/reinitialisationMdp" element={<Reinit/>}/>
        <Route path="*" element={<Erreur/>}/> # si jamais l'url est inconnu on affiche une erreur 404
      </Routes>
    </BrowserRouter>
  )
}

export default App;
