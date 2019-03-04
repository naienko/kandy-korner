import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                { this.props.hasOwnProperty("employees") && <h2>Location List</h2> }
                {
                    this.props.locations.map(location => 
                        <div key={location.id} className="card">
                            <h3>{location.name}</h3>
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </div>
                        )
                }
            </section>
        );
    }
}