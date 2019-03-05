import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import LocationList from './location/LocationList';
import CandyList from './candy/CandyList';
import EmployeeList from './employee/EmployeeList';

import SearchResults from './search/SearchResults';
import Login from "./authentication/Login";
import AuthRoute from "./authentication/AuthRoute";

import LocationManager from "../modules/api/LocationManager";
import EmployeeManager from "../modules/api/EmployeeManager";
import CandyManager from "../modules/api/CandyManager";
import TypeManager from "../modules/api/TypeManager";

import EmployeeForm from "./employee/EmployeeForm";
import CandyForm from "./candy/CandyForm";

import EmployeeDetail from "./employee/EmployeeDetail";
import CandyDetail from './candy/CandyDetail';
import LocationDetail from './location/LocationDetail';

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
                <Route path="/login" component={Login} />

                <AuthRoute path="/locations" Destination={LocationList} 
                    locations={this.state.locations} />
                
                <AuthRoute path="/locations/:locationId(\d+)" Destination={LocationDetail} 
                    locations={this.state.locations}
                    employees={this.state.employees} />

                <AuthRoute path="/employees" Destination={EmployeeList}
                    employees={this.state.employees} />
                <AuthRoute path="/employees/new" Destination={EmployeeForm}
                    addEmployee={this.addEmployee} 
                    locations={this.state.locations} />
                <AuthRoute path="/employees/:employeeId(\d+)" Destination={EmployeeDetail}
                    employees={this.state.employees} />

                <AuthRoute path="/candies" Destination={CandyList}
                    candies={this.state.candies}
                    types={this.state.types} 
                    deleteCandy={this.deleteCandy} />
                <AuthRoute path="/candies/new/" Destination={CandyForm}
                    addCandy={this.addCandy}
                    types={this.state.types} />
                <AuthRoute path="/candies/:candyId(\d+)" Destination={CandyDetail}
                    types={this.state.types} 
                    candies={this.state.candies} />

                <AuthRoute path="/search" Destination={SearchResults} />

            </React.Fragment>
        );
    }
}