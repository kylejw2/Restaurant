import React from 'react';

class DeleteEntree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (window.confirm("Are you sure you want to delete this entree?")) {
            const options = {
                method: 'DELETE'
            }
            await fetch(`${process.env.REACT_APP_API_URL}/${this.state.id}`, options);
        } else {
            return null;
        }
    }

    render() {
        return (
            <form>
                <input value={this.state.id} name="id" placeholder="Entree's ID" onChange={this.handleOnChange} />
                <button type="submit" onClick={this.handleSubmit}>Delete Entree</button>
            </form>
        );
    }   
}

export default DeleteEntree;