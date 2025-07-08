import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la pagina
        if ( inputValue.trim().length <= 1 ) return; // Evita agregar categorias vacias o con un solo caracter
        
        // setCategories( categories => [ inputValue, ...categories ] );
        setInputValue(''); // Limpia el input despues de enviar el formulario
        onNewCategory( inputValue.trim() ); // Llama a la funcion que se le pasa como prop
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        /> 
    </form>
     
  )
}
