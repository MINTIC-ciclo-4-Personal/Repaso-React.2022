import React from 'react'
import { Link } from 'react-router-dom';
import { useDark } from '../context/dark';

const Configuracion = () => {
    const { dark, setDark } = useDark();
    return (
        <div>
            <button onClick={()=>setDark(!dark)}>{dark?"Desactivar":"Activar"} modo oscuro</button>
            <Link to='/'>Ir al Home</Link>  
        </div>
    )
}

export default Configuracion