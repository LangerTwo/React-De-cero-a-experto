import React, { useEffect, useState } from 'react'

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        error: null,
    });

    useEffect(() => {

        getFetch()

    }, []);

    const getFetch = async () => {
        const resp = fetch('https://pokeapi.co/api/v2/pokemon/mudkip')
        const data = await (await resp).json();
        console.log(data);
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
