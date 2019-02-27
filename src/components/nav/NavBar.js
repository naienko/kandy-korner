import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
    render() {
        return (
            <nav>
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