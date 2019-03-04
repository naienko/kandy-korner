import React, { Component } from "react";

export default class EmployeeForm extends Component {
    state = {
        empFirstName: "",
        empLastName: "",
        phoneNumber: "",
        storeId: "",
        empPosition: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    createNewEmployee = event => {
        event.preventDefault();
        if(this.state.store === "") {
            window.alert("Please select a store this employee works at");
        } else {
            const employee = {
                first_name: this.state.empFirstName,
                last_name: this.state.empLastName,
                phone: this.state.phoneNumber,
                storeId: parseInt(this.state.storeId)
            };
            if (this.state.empPosition !== "") {
                employee.position = this.state.empPosition
            }

            this.props.addEmployee(employee)
                .then(() => this.props.history.push("/employees"))
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="empFirstName">First Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="empFirstName" placeholder="first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="empLastName">Last Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="empLastName" placeholder="last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Contact Number</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="phoneNumber" placeholder="phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="empPosition">Store Position</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="empPosition" placeholder="position (if applicable)" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="store">Assign to location</label>
                        <select defaultValue="" name="store" id="storeId" onChange={this.handleFieldChange}>
                            <option value="">Select a location</option>
                                {this.props.locations.map(element => (
                                    <option key={element.id} id={element.id} value={element.id}>{element.name}</option>
                                ))}
                        </select>
                    </div>
                    <button type="submit" onClick={this.createNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}