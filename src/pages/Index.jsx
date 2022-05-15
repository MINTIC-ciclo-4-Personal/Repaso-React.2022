import React, { useEffect, useState } from 'react'
import Button from '../components/Button';

const Index = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0)

  useEffect(()=>{
    console.log('cambió alguno de los valores y ya son:', 'valor1: ', valor1, 'valor2: ', valor2);
    setSuma(valor1+valor2)
  },[valor1, valor2])

  return (
    <div>
      <input value={valor1} 
        onChange={(e)=>setValor1(parseInt(e.target.value))} 
        placeholder='valor 1' 
        type="number" 
      />
      <input value={valor2} 
        onChange={(e)=>setValor2(parseInt(e.target.value))} 
        placeholder='valor 2' 
        type="number" 
      />
      <span>La suma de los valores 1 y 2 es: {suma}</span>
      <Button />
    </div>
  )
}

export default Index