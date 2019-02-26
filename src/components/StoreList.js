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
                                .sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
                                }/>
                            </section>
                        </div>
                        )
                }
            </article>
        );
    }
}