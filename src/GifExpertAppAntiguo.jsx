//rafc
import React, { useState } from 'react'
import { AddCategory,  GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball'])
    const onAddCategory = (newCategory) =>{
        //Evita repetir una categoria que ya está incluida
        if (categories.includes(newCategory)) return;

        // console.log('Ahora uso el AddCategory',newCategory);
        
        setCategories([newCategory,...categories])      
    }

  return (
    <>
        {/* Titulo */}        
        <h2>GifExpertApp</h2>
        
        {/* Input */}
        <AddCategory       
            onNewCategory = {onAddCategory}
    
        /> 
        {/* Listado de Gifs */}

        <ol>
            {/* category es una llave única */}
            <li>Doraemon</li>
            {categories.map( category =>{
                {/* El return se puede omitir */}
                return (
                    <div key={category}>       
                        <li>{category}</li>
                    </div>   
                )
            })} 
        </ol>
            {/* GifItem */}
    </>
  )
}


