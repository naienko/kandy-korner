import React, { Component } from "react";
import { Link } from "react-router-dom";
import NameForm from "../search/SearchForm";
import { withRouter } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <li className="nav-item">
                    <Link className="nav-link" to="/locations">Locations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employees">Employees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/candies">Candies</Link>
                </li>
                <li className="nav-item">
                    <NameForm />
                </li>
            </nav>
        )
    }
}

export default withRouter(NavBar);