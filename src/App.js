import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {   BrowserRouter,  Route,Routes,Switch} from 'react-router-dom'
import Navbar from './Componenet/Navbar/Navbar'
import Accueil from './Componenet/Accueil/Accueil'
import Skills from './Componenet/Skills/Skills'
function App() {
  return (
    <div className="App">
     < Navbar/>
     <BrowserRouter>
     <Routes>
     <Route path="/accueil" element={ <Accueil/>}/>
     <Route path="/skills" element={ <Skills/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
