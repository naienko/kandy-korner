import React, { Component } from 'react';
import StoreList from './StoreList';
import CandyList from './CandyList';
import EmployeeList from './EmployeeList';

export default class ApplicationView extends Component {
    
    LocationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    EmployeesFromAPI = [
        { id: 1, first_name: "Summer", last_name: "Rainault", storeId: 1, phone: "555-555-5555", position: "manager" },
        { id: 2, first_name: "Ashlin", last_name: "St Cyr", storeId: 2, phone: "234-435-7882" },
        { id: 3, first_name: "Barry", last_name: "Allen", storeId: 1, phone: "xxx-xxx-xxxx" },
        { id: 4, first_name: "Sebastien", last_name: "Sancerre", storeId: 1, phone: "123-245-7653" },
        { id: 5, first_name: "Betwyr", last_name: "ap Ban", storeId: 2, phone: "n/a" },
        { id: 6, first_name: "Winter", last_name: "Rainault", storeId: 2, phone: "555-555-5555", position: "manager" }
    ]

    CandyTypes = [
        { id: 1, name: "chocolate" },
        { id: 2, name: "gummy" },
        { id: 3, name: "hard" }
    ]

    SpecificCandies = [
        { id: 1, name: "Dove", candyId: 1 },
        { id: 2, name: "Orange Slices", candyId: 2 },
        { id: 3, name: "Brachs Peppermints", candyId: 3 },
        { id: 4, name: "Werthers", candyId: 3 },
        { id: 5, name: "M&Ms", candyId: 1 },
        { id: 6, name: "Gummy Bears", candyId: 2 }
    ]

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
                    type={this.state.types} />
                }}
                />
            </div>
        );
    }
}