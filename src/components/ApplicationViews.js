import React, { Component } from 'react';
import { Route } from "react-router-dom";
import LocationList from './location/LocationList';
import CandyList from './candy/CandyList';
import EmployeeList from './employee/EmployeeList';
import SearchResults from './search/SearchResults';

export default class ApplicationView extends Component {

    state = {
        candies: [],
        employees: [],
        locations: [],
        types: []
    };

    componentDidMount() {
        const newState = {};

        fetch("http://localhost:8081/locations/")
            .then(results => results.json())
            .then(locations => newState.locations = locations)

            .then(() => fetch("http://localhost:8081/employees/"))
            .then(results => results.json())
            .then(employees => newState.employees = employees)

            .then(() => fetch("http://localhost:8081/candies/"))
            .then(results => results.json())
            .then(candies => newState.candies = candies)

            .then(() => fetch("http://localhost:8081/types/"))
            .then(results => results.json())
            .then(types => newState.types = types)
// NOTE: you HAVE to do setState or your new data fetched just now is never going to show up in the app
            .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        fetch(`http://localhost:8081/candies/${id}`, {
                method: "DELETE"
            })
            .then(() => fetch("http://localhost:8081/candies/"))
            .then(results => results.json())
            .then(candies => this.setState({ 
                candies: candies
                })
            )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={() => {
                    return <LocationList locations={this.state.locations}
                    employees={this.state.employees} />
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={() => {
                    return <CandyList candies={this.state.candies}
                    types={this.state.types} deleteCandy={this.deleteCandy} />
                }}
                />
                <Route path="/search" render={(props) => {
                    return <SearchResults {...props} />
                }} 
                />
            </React.Fragment>
        );
    }
}