import React, { Component } from "react";
import { Redirect } from "react-router";

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        //      alert('A name was submitted: ' + this.state.value);
        this.setState({redirect: true});
        event.preventDefault();
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/search" />;
        } 
        // else {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                Search:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                
                );
//        }
    }
}