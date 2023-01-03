import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {   BrowserRouter,  Route,Routes,} from 'react-router-dom'
import Navbar from './Componenet/Navbar/Navbar'
import Accueil from './Componenet/Accueil/Accueil'
import Propos from './Componenet/Accueil/propos'
import Education from './Componenet/Accueil/Education'
function App() {
  return (
    <div className="App">
     < Navbar/>
     <BrowserRouter>
     <Routes>
     <Route path="/accueil" element={ <Accueil/>}/>
     <Route path="/apropos" element={<Propos/>}/>
     <Route path="/education" element={<Education/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
