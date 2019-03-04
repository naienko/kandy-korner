import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {this.props.isLocation ? ""
            : <div className="employeeButton">
                <button type="button" className="btn btn-success" onClick={() => {this.props.history.push("/employees/new")}}>Add New Employee</button>
            </div>
            }
                {
                    this.props.employees.map(employee => 
                        <div className="employee card" key={employee.id}>
                            {employee.first_name} {employee.last_name}
                            {employee.hasOwnProperty("position") ? ", manager" : ""}
                            <br />
                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        </div>
                        )
                }
            </section>
        );
    }
}