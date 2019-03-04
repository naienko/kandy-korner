import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        {employee.first_name} {employee.last_name}
                        </h4>
                            {employee.hasOwnProperty("position") ? "manager" : ""}
                        <h6 className="card-title">{employee.phone}</h6>
                    </div>
                </div>
            </section>
        )
    }
}