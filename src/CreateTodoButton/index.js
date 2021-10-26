import React from 'react';
import './index.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        // props.setOpenModal(prevState => !prevState);
        props.setOpenModal(true);
    };


    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };