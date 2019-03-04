import React, { Component } from "react";
import EmployeeList from "../employee/EmployeeList";

export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        {location.name}
                        </h4>
                        {location.address}
                            { this.props.hasOwnProperty("employees") && 
                                <React.Fragment>
                                    <p>Employees</p>
                                    <section className="employees-local">
                                        <EmployeeList employees={this.props.employees
                                            .filter( employee => employee.storeId === location.id && employee.position === "manager" )
                                        }/>
                                        <EmployeeList employees={this.props.employees
                                            .filter( employee => employee.storeId === location.id && employee.hasOwnProperty("position") !== true )
                                            .sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
                                        }/>
                                    </section>
                                </React.Fragment>
                            }
                    </div>
                </div>
            </section>
        )
    }
}