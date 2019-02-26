import React, { Component } from 'react'

export default class ExployeeList  extends Component {
    render() {
        return (
            <article className="employees">
                <h2>Location List</h2>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                        )
                }
            </article>
        );
    }
}