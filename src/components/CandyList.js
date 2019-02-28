import React, { Component } from 'react';

export default class CandyList extends Component {
    render () {
        return (
            <React.Fragment>
                 {
                    this.props.candies.map(candy => 
                        <div key={candy.id} className="card">
                            {candy.name}: a {' '}
                            {
                                this.props.types.find(
                                    type => type.id === candy.typeId
                                ).name
                            } candy
                            <a href="#"
                                    onClick={() => this.props.deleteCandy(candy.id)}
                                    className="card-link">Delete</a>
                        </div>
                        )
                }
            </React.Fragment>
        );
    }
}