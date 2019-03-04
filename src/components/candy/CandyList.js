import React, { Component } from 'react';

export default class CandyList extends Component {
    render () {
        return (
            <section className="candies">
                <div className="candyButton">
                    <button type="button" className="btn btn-success" onClick={() => {this.props.history.push("/candies/new")}}>Add New Candy</button>
                </div>
                 {
                    this.props.candies.map(candy => 
                        <div key={candy.id} className="card">
                            {candy.name}
                            { this.props.hasOwnProperty("types") && 
                            <React.Fragment>
                                : a {' '}
                                {
                                    this.props.types.find(
                                        type => type.id === candy.typeId
                                    ).name
                                } candy
                            </React.Fragment>
                            }
                            <a href="#"
                                    onClick={() => this.props.deleteCandy(candy.id)}
                                    className="card-link">Delete</a>
                        </div>
                        )
                }
            </section>
        );
    }
}