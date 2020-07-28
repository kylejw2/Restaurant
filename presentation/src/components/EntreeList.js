import React from 'react';
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
    }

    render() {
        const entrees = this.state.entrees.map(entree => <Entree key={entree._id} id={entree._id} name={entree.name} image={entree.image}/>);
        return (
            <ul>
                {entrees}
            </ul>
        );
    }
}