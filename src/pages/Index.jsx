import React, { useEffect, useState } from 'react'
import { useUser } from '../context/user';
import { Link } from 'react-router-dom';
import { useDark } from '../context/dark';

const Index = () => {
  const { userData, setUserData } = useUser()
  const { dark } = useDark();
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0)

  useEffect(() => {
    console.log('1 vez');
    console.log('info del usuario ', userData)
  }, [])

  useEffect(() => {
    console.log('cambió alguno de los valores y ya son:', 'valor1: ', valor1, 'valor2: ', valor2);
    setSuma(valor1 + valor2)
  }, [valor1, valor2])

  return (
    <div className={`container ${dark ? 'fondo-oscuro' : 'fondo-claro'}`}>
      <input value={valor1}
        onChange={(e) => setValor1(parseInt(e.target.value))}
        placeholder='valor 1'
        type="number"
      />
      <input value={valor2}
        onChange={(e) => setValor2(parseInt(e.target.value))}
        placeholder='valor 2'
        type="number"
      />
      <span>La suma de los valores 1 y 2 es: {suma}</span>
      <button onClick={() => setUserData({ ...userData, suma: suma })}>Guardar suma</button>
      <Link to="/admin/usuarios/nicolas">Ir a la pagina del usuarios</Link>
      <Link to="/configuracion">Ir a la pagina de configuracion</Link>
    </div>
  )
}

export default Index