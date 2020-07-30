import React from 'react';
import { Link } from 'react-router-dom';

export default class EntreeList extends React.Component{
    render() {
        if (this.props.singleItem) {
            return "This functionality has not yet been implemented.";
        }
        return (
            <li>
                <Link to={`/menu/${this.props.id}`}>
                    <img src={this.props.image} alt='food' width='200px'/>
                    <h5>{this.props.name}</h5>
                    <h5>${this.props.price}</h5>
                    <h6>{this.props.calories} cals</h6>
                </Link>
            </li>
        );
    }
}