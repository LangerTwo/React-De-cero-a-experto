/**
 * @jest-environment jsdom
 */

import { renderHook, act, waitFor } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Preubas en useCounter', () => {
    
    test('debe retornar los valores por defectos', () => {
      
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, rest } = result.current;

        expect( counter ).toBe( 10 );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( rest ).toEqual( expect.any( Function ) );
    });

    test('debe generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    });

    test('debe incrementar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
        });

        expect( result.current.counter ).toBe( 11 );
    });

    test('debe decrementar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement } = result.current;
        
        act( () => {
            decrement();
        });
        expect( result.current.counter ).toBe( 9 );
    });

    test('debe reiniciar el contador', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, rest } = result.current;

        act( () => {
            increment();
            increment();
            rest();
        });

        expect( result.current.counter ).toBe( 100 );
    });

})