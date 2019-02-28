import React, { Component } from "react";
import { withRouter } from "react-router";
//import EmployeeList from "./EmployeeList"

class SearchResults extends Component {
    render () {
        const newState = this.props.location.newState;
        console.log("newState is:", newState);
        console.log(this.props.location.newState)
        return (
            <article className="search">
                {/* <EmployeeList employees={newState.employees} /> */}
            </article>
        )
    }
};

export default withRouter(SearchResults);