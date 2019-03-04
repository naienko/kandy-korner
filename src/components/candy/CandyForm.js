import React, { Component } from "react";

export default class CandyForm extends Component {
    state = {
        candyName: "",
        typeId: ""
    };

      // Update state whenever an input field is edited
    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    createNewCandy = event => {
        event.preventDefault();
        
        const candy = {
            name: this.state.candyName,
            typeId: this.state.typeId
        };

        this.props.addCandy(candy)
            .then(() => this.props.history.psuh("/candies"))
    };

    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy Name</label>
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="candyName" placeholder="candy name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="typeId">Type</label>
                        <select defaultValue="" name="type" id="typeId" onChange={this.handleFieldChange}>
                            <option value="">Select a candy type</option>
                            {this.props.types.map(element => (<option key={element.id} id={element.id} value={element.id}>{element.name}</option>))}
                        </select>
                    </div>
                    <button type="submit" onClick={this.createNewCandy} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}