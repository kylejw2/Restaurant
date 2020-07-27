import React from 'react';
import '../App.css';

export default class Entree extends React.Component{
    state = {
        entrees: []
    }

    async componentDidMount() {
        const url = process.env.REACT_APP_API_URL;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({entrees: data});
        console.log(response, data, url);
    }


    render() {
        return (
            <ul>
                {this.state.entrees.map(entree => {
                    return (
                        <li>
                            <img src={entree.image} alt='food' width='200px'/>
                            <h5>{entree.name}</h5>
                        </li>
                    )
                })}
            </ul>
        );
    }
}