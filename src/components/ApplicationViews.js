import React, { Component } from 'react';
import { Route } from "react-router-dom";
import StoreList from './StoreList';
import CandyList from './CandyList';
import EmployeeList from './EmployeeList';

export default class ApplicationView extends Component {

    state = {
        candies: this.SpecificCandies,
        employees: this.EmployeesFromAPI,
        locations: this.LocationsFromAPI,
        types: this.CandyTypes
    }

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
            </div>
        );
    }
}