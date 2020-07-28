import React from 'react';
import EntreeList from './EntreeList'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Link to='/menu'><h3>Menu</h3></Link>
            <EntreeList />
        </div>
    );
}

export default Menu;