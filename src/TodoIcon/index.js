import React from 'react';
import './index.css';
import { ReactComponent as CheckSVG } from '../assets/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/trash.svg';

const iconTypes = {
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    )
};

function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? '#4caf50' : 'gray'}
            onClick={onComplete}
        />
    );
}

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            onClick={onDelete}
        />
    );
}

export { TodoIcon, CompleteIcon, DeleteIcon };

