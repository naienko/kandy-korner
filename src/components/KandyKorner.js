import React, { Component } from "react";
import ApplicationView from "./ApplicationViews";
import NavBar from "./nav/NavBar";

export default class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationView />
            </React.Fragment>
        )
    }
}