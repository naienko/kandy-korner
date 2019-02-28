import React, { Component } from "react";
import { withRouter } from "react-router";
import EmployeeList from "../employee/EmployeeList"
import LocationList from "../location/LocationList";
import CandyList from "../candy/CandyList";

class SearchResults extends Component {
    
    render () {
        return (
            <article className="search">
            {
                this.props.location.state.hasOwnProperty("employees") ? 
                <section className="employeeResults">
                    <h3>Returned Employees</h3>
                    <EmployeeList employees={this.props.location.state.employees} />
                </section>
                : 
                <p>No matching employees found</p>
            }
            {
                this.props.location.state.hasOwnProperty("locations") ?
                <section className="locationResults">
                    <h3>Returned Locations</h3>
                    <LocationList locations={this.props.location.state.locations} />
                </section>
                : 
                <p>No matching locations found</p>
            }
            {
                this.props.location.state.hasOwnProperty("candies") ?
                <section className="candyResults">
                    <h3>Returned Candies</h3>
                    <CandyList candies={this.props.location.state.candies} />
                </section>
                : 
                <p>No matching candies found</p>
            }
        </article>
        )
    }
};

export default withRouter(SearchResults);