import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LocationList extends Component {
    isLocation = true;

    render() {
        return (
            <section className="locations">
                { this.props.hasOwnProperty("employees") && <h2>Location List</h2> }
                {
                    this.props.locations.map(location => 
                        <div key={location.id} className="card">
                            <h3>{location.name}</h3>
<<<<<<< HEAD
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
=======
                            {location.address}
                            { this.props.hasOwnProperty("employees") && 
                                <React.Fragment>
                                    <p>Employees</p>
                                    <section className="employees-local">
                                        <EmployeeList isLocation={this.isLocation} employees={this.props.employees
                                            .filter( employee => employee.storeId === location.id && employee.position === "manager" )
                                        }/>
                                        <EmployeeList isLocation={this.isLocation} employees={this.props.employees
                                            .filter( employee => employee.storeId === location.id && employee.hasOwnProperty("position") !== true )
                                            .sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
                                        }/>
                                    </section>
                                </React.Fragment>
                            }
>>>>>>> master
                        </div>
                        )
                }
            </section>
        );
    }
}