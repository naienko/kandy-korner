import React, { Component } from 'react'

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
                            contact: {employee.phone}
                        </div>
                        )
                }
            </section>
        );
    }
}