import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <li className="nav-item">
                    <Link className="nav-link" to="/stores">Stores</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employees">Employees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Candies">Candies</Link>
                </li>
            </nav>
        )
    }
}