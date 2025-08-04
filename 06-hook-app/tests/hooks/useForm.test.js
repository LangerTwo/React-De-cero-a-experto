/**
 * @jest-environment jsdom
*/

import { renderHook, act, waitFor } from '@testing-library/react';
import { useForm } from "../../src/hooks/useForm";



describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Rein',
        email: 'test@test.com'
    }

    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'Leon';
        const { result } = renderHook( () => useForm(initialForm) );

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
        });

        const { name, formState } = result.current;

        expect(name).toBe(newName);
        expect(formState.name).toBe(newName);
    });

    test('debe realizar el reset del formulario', () => {
        const newName = 'Leon';
        const { result } = renderHook( () => useForm(initialForm) );

        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
            onResetForm();
        });

        const { name, formState } = result.current;

        expect(name).toBe(initialForm.name);
        expect(formState.name).toBe(initialForm.name);
    });

});