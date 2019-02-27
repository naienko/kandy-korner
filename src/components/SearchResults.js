import React, { Component } from "react";
import EmployeeList from "./EmployeeList"
export default class SearchResults extends Component {
    componentWillMount() {
        console.log("props:", this.props)
    }

    render () {
        return (
            <article className="search">
            {/* <EmployeeList employees={this.props.state.employees} /> */}
            </article>
        )
    }
}