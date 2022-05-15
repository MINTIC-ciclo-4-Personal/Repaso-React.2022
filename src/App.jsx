import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import './styles/styles.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
