import { useState } from "react";


export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState( initialState );

    const increment = () => {
        setCounter( counter + 1 );
    }

    // const decrement = ( value = 1 ) => {
    //     setCounter( counter - value );
    // }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const rest = () => {
        setCounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        rest
    }
}