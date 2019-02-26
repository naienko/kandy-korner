import React, { Component } from 'react'

export default class StoreList  extends Component {
    render() {
        return (
            <article className="locations">
                <h2>Location List</h2>
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            {location.address}
                        </div>
                        )
                }
            </article>
        );
    }
}