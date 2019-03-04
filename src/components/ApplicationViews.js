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

        LocationManager.getLocations()
            .then(locations => newState.locations = locations)

            .then(() => EmployeeManager.getEmployees())
            .then(employees => newState.employees = employees)

            .then(() => CandyManager.getCandies())
            .then(candies => newState.candies = candies)

            .then(() => TypeManager.getTypes())
            .then(types => newState.types = types)
// NOTE: you HAVE to do setState or your new data fetched just now is never going to show up in the app
            .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        CandyManager.delete(id)
            .then(() => CandyManager.getAll())
            .then(candies => this.setState({ 
                candies: candies
            })
        )
    }

    addEmployee = employee => {
        EmployeeManager.addEmployee(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees => this.setState({
                employees: employees
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
                <Route path="/employees" render={(props) => {
                    return <EmployeeList {...props} employees={this.state.employees} />
                }} />
                <Route path="employees/new" render={(props) => {
                    return <EmployeeForm {...props} 
                        addEmployee={this.addEmployee} 
                        locations={this.state.locations} />
                }} />

                <Route path="/candies" render={() => {
                    return <CandyList candies={this.state.candies}
                        types={this.state.types} 
                        deleteCandy={this.deleteCandy} />
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