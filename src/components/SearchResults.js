import React, { Component } from "react";
import { withRouter } from "react-router";
import EmployeeList from "./EmployeeList"
import StoreList from "./StoreList";

class SearchResults extends Component {

    render () {
        return (
            <article className="search">
                <section className="employeeResults">
                    <h2>Returned Employees</h2>
                    <EmployeeList employees={this.props.location.state.employees} />
                </section>
                <section className="locationResults">
                    <h2>Returned Locations</h2>
                    <StoreList stores={this.props.location.state.locations} />
                </section>

            </article>
        )
    }
};

export default withRouter(SearchResults);