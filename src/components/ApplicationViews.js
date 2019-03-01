import React, { Component } from 'react';
import { Route } from "react-router-dom";
import LocationList from './location/LocationList';
import CandyList from './candy/CandyList';
import EmployeeList from './employee/EmployeeList';
import SearchResults from './search/SearchResults';
import LocationManager from "../modules/api/LocationManager";
import EmployeeManager from "../modules/api/EmployeeManager";
import CandyManager from "../modules/api/CandyManager";
import TypeManager from "../modules/api/TypeManager";

export default class ApplicationView extends Component {

    state = {
        candies: [],
        employees: [],
        locations: [],
        types: []
    };

    componentDidMount() {
        const newState = {};

        LocationManager.getAll()
            .then(locations => newState.locations = locations)

            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)

            .then(() => CandyManager.getAll())
            .then(candies => newState.candies = candies)

            .then(() => TypeManager.getAll())
            .then(types => newState.types = types)
// NOTE: you HAVE to do setState or your new data fetched just now is never going to show up in the app
            .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        // fetch(`http://localhost:8081/candies/${id}`, {
        //         method: "DELETE"
        //     })
        CandyManager.delete(id)
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