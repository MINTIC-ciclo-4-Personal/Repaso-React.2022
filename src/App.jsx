import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import './styles/styles.css'
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
