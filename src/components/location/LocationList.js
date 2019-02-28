import React, { Component } from 'react'
import EmployeeList from '../employee/EmployeeList';

export default class LocationList  extends Component {
    render() {
        return (
            <section className="locations">
                { this.props.hasOwnProperty("employees") && <h2>Location List</h2> }
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            <h3>{location.name}</h3>
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
                        )
                }
            </section>
        );
    }
}