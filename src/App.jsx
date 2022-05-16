import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/styles.css'
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import Layout from "./layout/Layout";
import IndexAdmin from "./pages/admin/Index";
import Usuarios from "./pages/admin/Usuarios";
import LayoutAdmin from "./layout/LayoutAdmin";
import UsuarioGenerico from "./pages/usuarios/UsuarioGenerico";
import { UserContext } from "./context/user";
import { useState } from "react";
import { DarkContext } from "./context/dark";
import Configuracion from "./pages/Configuracion";

function App() {
  const [userData, setUserData] = useState({ nombre: 'Nicolás' });
  const [dark, setDark] = useState(false)
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Index />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="configuracion" element={<Configuracion />} />
              </Route>
              <Route path="/admin" element={<LayoutAdmin />}>
                <Route path="" element={<IndexAdmin />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="usuarios/:nombreusuarios" element={<UsuarioGenerico />} />
              </Route>
            </Routes>
          </Router>
      </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
