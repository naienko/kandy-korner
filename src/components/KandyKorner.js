import React, { Component } from 'react';

export default class KandyKorner extends Component {
    
    LocationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    EmployeesFromAPI = [
        { id: 1, name: "Summer Rainault" },
        { id: 2, name: "Ashlin St Cyr" },
        { id: 3, name: "Barry Allen" },
        { id: 4, name: "Sebastien Sancerre" },
        { id: 5, name: "Betwyr ap Ban" }
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
        locations: this.LocationsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <StoreList stores={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies} />
            </React.Fragment>
        );
    }
}