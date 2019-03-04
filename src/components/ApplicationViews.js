import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from "react-router-dom";

=======
import { Route, Redirect } from "react-router-dom";
>>>>>>> master
import LocationList from './location/LocationList';
import CandyList from './candy/CandyList';
import EmployeeList from './employee/EmployeeList';

import SearchResults from './search/SearchResults';

import LocationManager from "../modules/api/LocationManager";
import EmployeeManager from "../modules/api/EmployeeManager";
import CandyManager from "../modules/api/CandyManager";
import TypeManager from "../modules/api/TypeManager";
import EmployeeForm from "./employee/EmployeeForm";
import CandyForm from "./candy/CandyForm";
import Login from "./authentication/Login";

import EmployeeDetail from "./employee/EmployeeDetail";
import CandyDetail from './candy/CandyDetail';
import LocationDetail from './location/LocationDetail';

export default class ApplicationView extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
        CandyManager.delAndGetCandies(id)
            .then(candies => this.setState({ 
                candies: candies
            })
        )
    }

    addEmployee = employee => {
        EmployeeManager.addEmployee(employee)
            .then(() => EmployeeManager.getEmployees())
            .then(employees => this.setState({
                employees: employees
            })
        )
    }

    addCandy = candy => {
        CandyManager.addCandy(candy)
            .then(() => CandyManager.getcandies())
            .then(candies => this.setState({
                candies: candies
            })
        )
    }

    render() {
        return (
            <React.Fragment>
<<<<<<< HEAD
                <Route exact path="/locations" render={() => {
                    return <LocationList locations={this.state.locations}
                        employees={this.state.employees} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} locations={this.state.locations}
                        employees={this.state.employees} />
                }} />

                <Route exact path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} employees={this.state.employees} />
                }} />

                <Route exact path="/candies" render={() => {
                    return <CandyList candies={this.state.candies}
                        types={this.state.types} 
                        deleteCandy={this.deleteCandy} />
                }}
                />
                <Route path="/candies/:candyId(\d+)" render={(props) => {
                    return <CandyDetail {...props} 
                        types={this.state.types} 
                        candies={this.state.candies} />
=======

                <Route path="/login" component={Login} />

                <Route exact path="/locations" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                            locations={this.state.locations}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                    
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props} 
                            addEmployee={this.addEmployee} 
                            locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/candies" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CandyList {...props}
                            candies={this.state.candies}
                            types={this.state.types} 
                            deleteCandy={this.deleteCandy} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/candies/new/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CandyForm {...props}
                            addCandy={this.addCandy}
                            types={this.state.types} />
                    } else {
                        return <Redirect to="/login" />
                    }
>>>>>>> master
                }} />

                <Route path="/search" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <SearchResults {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} 
                />
            </React.Fragment>
        );
    }
}