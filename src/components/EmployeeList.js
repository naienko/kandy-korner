import React, { Component } from 'react'

import "../index.css"
export default class EmployeeList  extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.employees.map(employee => 
                        <div className="employee" key={employee.id}>
                            {employee.first_name} {employee.last_name}
                            {employee.hasOwnProperty("position") ? ", manager" : ""}
                            <br />
                            contact: {employee.phone}
                        </div>
                        )
                }
            </React.Fragment>
        );
    }
}