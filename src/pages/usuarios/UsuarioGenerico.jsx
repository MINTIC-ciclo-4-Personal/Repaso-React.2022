import React from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../../context/user';

const UsuarioGenerico = () => {
    let params = useParams();
    const {userData} = useUser()
    console.log('params', params)
  return (
    <div>Pagina de {params.nombreusuarios} la suma es: {userData.suma}</div>
  )
}

export default UsuarioGenerico