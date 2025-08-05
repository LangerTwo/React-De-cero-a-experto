/**
 * @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import { MultiplesCustomHooks } from "../../src/03-examples/MultiplesCustomHooks";


describe('Pruebas en <MultiplesCustomHooks />', () => {

    test('debe de mostrar el componente correctamente', () => {

        render( <MultiplesCustomHooks /> );

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Información del Pokémon') );

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();

    });

});