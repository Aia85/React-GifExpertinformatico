import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

//useEffect, vale para disparar efectos secundarios.
export const GifGrid = ({category}) => {

  const [counter, setCounter] = useState(10)

  useEffect(()=>{   
    console.log('Porque usas eso??');
    getGifs(category);

  },[])

  // Al dejar arriba, pone que ese Hook solo se dispara la primera vez que se carga el componente.
  return (
    <>
        <h3>{category}</h3>
        <p>Ey baby ✨🐐👩‍🦰</p>
        <h5>{counter}</h5>
        <button onClick={()=> setCounter(counter+1)}>+1</button>
 

    </>
  
  )
}
