import React from 'react';
import '../App.css';

export default class EntreeList extends React.Component{
    render() {
        return (
        <li>
            <img src={this.props.image} alt='food' width='200px'/>
            <h5>{this.props.name}</h5>
        </li>);
    }
}