import React from 'react';
import { Link } from 'react-router-dom';

export default class EntreeList extends React.Component{
    state = {
        name: '',
        image: '',
        id: '' // should this be a string?
    }

    render() {
        if (this.props.singleItem) {
            // get the async function

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