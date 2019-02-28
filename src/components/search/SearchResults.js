import React, { Component } from "react";
import { withRouter } from "react-router";
import EmployeeList from "../employee/EmployeeList"
import LocationList from "../location/LocationList";

class SearchResults extends Component {

    render () {
        return (
            <React.Fragment>
                {
                    this.props.location.hasOwnProperty("state") ? 
                    <article className="search">
                        <section className="employeeResults">
                            <h2>Returned Employees</h2>
                            <EmployeeList employees={this.props.location.state.employees} />
                        </section>
                        <section className="locationResults">
                            <h2>Returned Locations</h2>
                            <LocationList locations={this.props.location.state.locations} />
                        </section>
                    </article>
                : 
                    <article className="search">No results found</article>
                }
            </React.Fragment>
        )
    }
};

export default withRouter(SearchResults);