import './App.css';
import Nav from './components/layout/Nav.js';
import './components/style/normalize.css';
import Informacion from './components/pages/informacion.js';
import Proyectos from './components/pages/Proyectos.js'; 
import Footer from './components/layout/Footer.js';
import Home from './components/pages/Home.js';
import Main from './components/layout/Main.js';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
<Router>
<div className="App">
    <Nav/>
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/informacion" element={<Informacion/>} />
      <Route path="/Proyectos" element={<Proyectos/>} />
    </Routes>
    <Footer/>
</div>
</Router>
  );
}

export default App;

