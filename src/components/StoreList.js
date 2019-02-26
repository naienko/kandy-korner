import React, { Component } from 'react'
import EmployeeList from './EmployeeList';

export default class StoreList  extends Component {
    render() {
        return (
            <article className="locations">
                <h2>Store List</h2>
                {
                    this.props.stores.map(location => 
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            {location.address}
                            <p>Employees</p>
                            <section className="employees-local">
                            <EmployeeList employees={this.props.employees
                                .filter( employee => employee.storeId === location.id )
                                }/>
                            </section>
                        </div>
                        )
                }
            </article>
        );
    }
}