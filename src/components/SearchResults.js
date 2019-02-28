import React, { Component } from "react";
import { withRouter } from "react-router";
import EmployeeList from "./EmployeeList"

class SearchResults extends Component {
    // componentDidMount() {
    //     const newState = {}
    //     newState.employees = this.props.location.state;
    //     console.log("newState is:", newState);
    //     this.setState(newState);
    //     console.log("state is:", this.state);
    // }

    // state = {
    //     employees: []
    // }

    render () {
        console.log(this.props.location.newState["first_employees"])
        return (
            <article className="search">
                {/* <EmployeeList employees={this.props.location.newState.employees} /> */}
            </article>
        )
    }
};

export default withRouter(SearchResults);