import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from './useTodos';

export const TodoApp = () => {
    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>

        </>
    )
}
