import React, { useState } from 'react'
import { AddCategory, GidGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return; // Evita agregar categorias duplicadas
        setCategories([ newCategory, ...categories ])
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        { categories.map( category => (
                <GidGrid 
                    key={category} 
                    category={category}
                />
            )) 
        }
    </>
  )
}
