import React, { use, useLayoutEffect, useRef } from 'react'

export const PokemonCard = ({ id, name, sprites}) => {

  const h2Ref = useRef();
  
  useLayoutEffect(() => {

    const { height, width } = h2Ref.current.getBoundingClientRect();
    console.log('useLayoutEffect', { height, width });

  }, [])

  return (
    <section style={{ height: 200, display: 'flex', flexDirection: 'row' }} className='bg-success text-center'>
        <h2 ref={h2Ref} className='text-capitalize'>#{id} - {name}</h2>

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
