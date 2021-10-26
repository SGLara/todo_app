import React from 'react';
import './index.css'

function TodosLoading() {
    return (
        <React.Fragment>
            <div className='LoadingTodo-container'></div>
            <div className='LoadingTodo-container'></div>
            <div className='LoadingTodo-container'></div>
            <div className='LoadingTodo-container'></div>
        </React.Fragment>
    );
}

export { TodosLoading };