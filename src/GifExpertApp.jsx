//rafc
import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';
const imagenesIniciales = ['Programacion', 'Informatica']

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(imagenesIniciales)
    const onAddCategory = (newCategory) =>{

        if (categories.includes(newCategory)) return;        
        setCategories([newCategory,...categories])      
    }

    const cleanCategory = () =>{
       
        setCategories(imagenesIniciales)      
    }

  return (
    <>  
        <h2>Busca tus gifs favoritos:</h2>
    
        <AddCategory       
            onNewCategory = {onAddCategory}
        /> 
        <button className='reset' onClick={cleanCategory}>Reset</button>
        {categories.map( (category) =>(
             
            <GifGrid 
                key={category}
                category = {category}
            />  
         
        ))} 
    </>
  )
}


