import React from 'react';
import './index.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };
// export default TodoCounter;