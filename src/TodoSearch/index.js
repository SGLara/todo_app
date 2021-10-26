import React from 'react';
import './index.css';
import {TodoContext} from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input
            className='TodoSearch'
            placeholder='Buscar TO-DO'
            value={searchValue}
            key='search'
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };