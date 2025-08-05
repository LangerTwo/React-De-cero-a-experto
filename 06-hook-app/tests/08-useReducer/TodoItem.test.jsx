/**
 * @jest-environment jsdom
*/
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el TODO pendiente de completar', () => {
      
        render( 
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        // console.log(liElement.innerHTML);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElemnt = screen.getByLabelText('span');
        expect( spanElemnt.className ).toContain('align-self-center');
        expect( spanElemnt.className ).not.toContain('text-decoration-line-through');
        
        // screen.debug();
    });

    test('debe mostrar el TODO completado', () => {

        todo.done = true;
      
        render( 
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElemnt = screen.getByLabelText('span');
        expect( spanElemnt.className ).toContain('text-decoration-line-through');
        
        // screen.debug();
    });

    test('span debe llamar onToggleTodo cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElemnt = screen.getByLabelText('span');
        fireEvent.click( spanElemnt );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button debe llamar onDeleteTodo cuando se hace click', () => {
        
        render( 
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
    
});