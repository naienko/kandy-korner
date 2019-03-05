import React from "react"
import { Route } from "react-router-dom"
import Login from "./Login";

const isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
    sessionStorage.getItem("credentials") !== null

const AuthRoute = ({Destination,...srcProps}) => {
    return (
        <Route exact path={srcProps.path} render={props => {
            if (isAuthenticated()) {
                return <Destination {...props} {...srcProps} />
            } else {
                return <Login />
            }
        }} />
    )
}

export default AuthRoute;