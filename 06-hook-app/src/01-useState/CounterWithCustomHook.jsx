import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, rest, decrement } = useCounter( 10 );

  return (
    <>
        <h1>Counter With Hook: { counter }</h1>
        <hr />

        <button onClick={ increment } className='btn btn-primary'>+1</button>
        <button onClick={ rest } className='btn btn-success'>Reset</button>
        <button onClick={ decrement } className='btn btn-secondary'>-1</button>
    </>
  )
}
