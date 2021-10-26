import React from 'react';
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            {/* Another way to do it */}
            {/* <TodoContext.Consumer> */}
            {/* {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => ( */}
            <TodoList>
                {error && <center><p>¡Se ha producido un error!</p></center>}
                {loading && <center><p>¡Cargando... por favor espere!</p></center>}
                {(!loading && !searchedTodos.length) &&
                    <center style={{
                        marginTop: '20px'
                    }}>
                        <p>¡Crea tu primer TODO!</p>
                    </center>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {/* )} */}
            {/* </TodoContext.Consumer> */}

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };