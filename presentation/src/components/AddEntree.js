import React from 'react';

export default class AddEntree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            calories: 0,
            image: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleOnSubmit(event) {
        event.preventDefault();
        const {...data} = this.state;
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        await fetch(`${process.env.REACT_APP_API_URL}`, options);
    }

    render() {
        return (
            <form>            
                <input type='text' name='name' value={this.state.name.value} placeholder='Name of entree' onChange={this.handleOnChange} /><br/>
                <input type='number' name='price' value={this.state.price.value} placeholder='Price' onChange={this.handleOnChange} /><br/>
                <input type='number' name='calories' value={this.state.calories.value} placeholder='Calories' onChange={this.handleOnChange} /><br/>
                <input type='url' name='image' value={this.state.image.value} placeholder='Image URL' onChange={this.handleOnChange} /><br/>
                <button type='submit' onClick={this.handleOnSubmit} >Add Entree</button>
            </form>
        );
    }
}