import React, { Component } from "react";
import EmployeeList from "./EmployeeList";

export default class SearchResults extends Component {

    componentDidMount() {
        const newState = {};
        const searchTerm = this.state.value;

        fetch("http://localhost:8081/locations/")
            .then(results => results.json())
            .then(locations => newState.locations = locations)

            .then(() => fetch(`http://localhost:8081/employees/?first_name_like=${searchTerm}`))
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

    render () {
        return (
            <article className="search">
                <EmployeeList employees={this.state.employees} />
            </article>
        )
    }
}