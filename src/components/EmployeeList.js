import React, { Component } from 'react'

export default class ExployeeList  extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                            {employee.name}<br />
                            contact: {employee.phone}
                        </div>
                        )
                }
            </React.Fragment>
        );
    }
}