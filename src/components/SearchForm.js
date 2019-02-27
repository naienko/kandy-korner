import React, { Component } from "react";
import { withRouter } from "react-router";

class NameForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {        
        const newState = {};

        fetch(`http://localhost:8081/employees/?first_name_like=${this.state.value}`)
            .then(results => results.json())
            .then(employees => newState.employees = employees)
            //.then(console.log(newState))
            .then(this.props.history.push(`/search`, {state: newState}))
            .then(console.log("props:", this.props))
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Search:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default withRouter(NameForm);