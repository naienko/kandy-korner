import React, { Component } from "react";

export default class NameForm extends Component {
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
        this.props.history.push("/search")
        fetch(`http://localhost:8081/employees/?first_name_like=${this.state.value}`)
            .then(results => results.json())
            .then(employees => newState.employees = employees)
            .then(this.props.history.push(newState))
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