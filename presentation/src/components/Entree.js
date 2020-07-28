import React from 'react';
import { Link } from 'react-router-dom';

export default class EntreeList extends React.Component{
    state = {
        name: '',
        image: '',
        id: '' // is this a string?
    }

    // Get the id and make a fetch request to retreive the data on a single entree from the database


    render() {
        if (this.props.singleItem) {
    // Call the function here to execute the theory in line 11
        } else {
            return (
                <li>
                    <Link to={`/menu/${this.props.id}`}>
                        <img src={this.props.image} alt='food' width='200px'/>
                        <h5>{this.props.name}</h5>
                    </Link>
                </li>
            );
        }
    }
}