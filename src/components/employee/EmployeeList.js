import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class EmployeeList  extends Component {
    render() {
        return (
            <section className="employees">
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