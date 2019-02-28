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
            // .then(() => fetch(`http://localhost:8081/employees/?last_name_like=${this.state.value}`))
            // .then(results => results.json())
            // .then(employees => newState.last_employees = employees)
            .then(() => fetch(`http://localhost:8081/locations/?name_like=${this.state.value}`))
            .then(results => results.json())
            .then(locations => newState.locations = locations)
                                    .then(() => {
                                        console.table(newState)
                                    })
            .then(() => {
                this.props.history.push(
                {
                    pathname: "/search", 
                    state: newState
                }
                )
            })
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