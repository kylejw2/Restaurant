import React from 'react';

export default class UpdateEntree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            calories: '',
            image: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleOnClick(event) {
        event.preventDefault();
        const url = process.env.REACT_APP_API_URL + `/${this.state.id}`;
        const {...data} = this.state;
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        await fetch(url, options);
    }

    render() {
        return (
            <form>
                <input type='text' placeholder="Entree's ID" value={this.state.id} name='id' onChange={this.handleOnChange} /><br/>
                <input type='text' placeholder="Name" value={this.state.name} name='name' onChange={this.handleOnChange} /><br/>
                <input type='number' name='price' value={this.state.price} placeholder="Price" onChange={this.handleOnChange} /><br/>
                <input type='number' placeholder="Calories" value={this.state.calories} name='calories' onChange={this.handleOnChange} /><br/>
                <input type='text' placeholder="Image URL" value={this.state.image} name='image' onChange={this.handleOnChange} /><br/>
                <button type='submit' onClick={this.handleOnClick}>Update entree</button>
            </form>
        );
    }
}