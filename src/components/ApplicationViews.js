import React, { Component } from 'react';
import { Route } from "react-router-dom";
import StoreList from './StoreList';
import CandyList from './CandyList';
import EmployeeList from './EmployeeList';
import SearchResults from './SearchResults';

export default class ApplicationView extends Component {

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

    state = {
        candies: [],
        employees: [],
        locations: [],
        types: []
    };

    render() {
        return (
            <div id="body">
                <Route exact path="/stores" render={() => {
                    return <StoreList stores={this.state.locations}
                    employees={this.state.employees} />
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={() => {
                    return <CandyList candies={this.state.candies}
                    types={this.state.types} />
                }}
                />
                <Route path="/search" render={() => {
                    return <SearchResults />
                }} 
                />
            </div>
        );
    }
}