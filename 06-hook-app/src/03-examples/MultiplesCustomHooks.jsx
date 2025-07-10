import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultiplesCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/1');

    return (
        <>
            <h1>Información del Pokémon</h1>
            <hr />

            { isLoading && <h2>Cargando...</h2> }
            <h2>{ data?.name }</h2>
        </>
    )
}
