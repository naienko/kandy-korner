import React, { Component } from "react";
import { withRouter } from "react-router";
import CandyManager from "../../modules/api/CandyManager";
import LocationManager from "../../modules/api/LocationManager";
import EmployeeManager from "../../modules/api/EmployeeManager";

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
        const searchTerm = this.state.value;

        EmployeeManager.getQuery(`first_name_like=${searchTerm}&last_name_like=${searchTerm}`)
            .then(employees => newState.employees = employees)
            
            .then(() => LocationManager.getQuery(`name_like=${searchTerm}`))
            .then(locations => newState.locations = locations)

            .then(() => CandyManager.getQuery(`name_like=${searchTerm}`))
            .then(candies => newState.candies = candies)
            
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