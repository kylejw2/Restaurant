import React from 'react';
import '../App.css';
import Entree from './Entree';

export default class EntreeList extends React.Component{
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
        const entrees = this.state.entrees.map(entree => <Entree name={entree.name} image={entree.image}/>);
        return (
            <ul>
                {entrees}
            </ul>
        );
    }
}