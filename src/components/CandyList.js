import React, { Component } from 'react';

export default class CandyList extends Component {
    render () {
        return (
            <React.Fragment>
                 {
                    this.props.candies.map(candy => 
                        <div key={candy.id}>
                            {candy.name}: a {' '}
                            {
                                this.props.types.find(
                                    type => type.id === candy.candyId
                                ).name
                            } candy
                        </div>
                        )
                }
            </React.Fragment>
        );
    }
}