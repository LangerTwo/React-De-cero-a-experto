/**
 * @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";
// import { useUser } from "../../src/hooks/useUser";


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Leo'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label='pre'
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug();

    });

    test('debe de mostrar el componenete CON el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag2 = screen.getByLabelText('pre'); // aria-label='pre'
        // console.log(preTag2.innerHTML);
        expect( preTag2.innerHTML ).toContain( user.name );
        expect( preTag2.innerHTML ).toContain( user.id.toString() );
        // screen.debug();
        
    })

});