import React from 'react'

export const PokemonCard = ({ id, name, sprites}) => {
  return (
    <section style={{ height: 200 }} className='bg-success text-center'>
        <h2 className='text-capitalize'>#{id} - {name}</h2>

        {/* Imagenes */}
        <div>
            {
                sprites.map((sprite, index) => (
                    <img 
                        key={index} 
                        src={sprite} 
                        alt={name} 
                        className='img-fluid rounded m-1' 
                        style={{ width: 100, height: 100 }} 
                    />
                ))
            }
        </div>
    </section>
  )
}
