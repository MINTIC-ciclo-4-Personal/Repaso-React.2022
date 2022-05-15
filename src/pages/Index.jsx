import React, { useState } from 'react'

const Index = () => {
  const [variable1, setVariable1] = useState('hola mundo soy un estado')
  const [valorInput, setValorInput] = useState()

  const funcionClick = () => {
    setVariable1(valorInput)
  }
  const cambioInput = (e) => {
    setValorInput(e.target.value)
  }

  return (
    <div>
      <div className='fondo-verde'>
        <span>El valor de la variable es:</span>
        {variable1}
      </div>
      <input
        value={valorInput}
        onChange={cambioInput}
        type="text"
        placeholder='Ingrese el nuevo valor para la variable'
      />
      <button onClick={funcionClick}>Haz click acá</button>
    </div>
  )
}

export default Index