import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/menu'><h3>Menu</h3></Link>
            <Link to='/add-entree'><h3>Add Entree</h3></Link>
            <Link to='/delete-entree'><h3>Delete Entree</h3></Link>
        </nav>
    );
}

export default Nav;