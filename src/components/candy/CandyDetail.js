import React, { Component } from "react"

export default class CandyDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const candy = this.props.candies.find(a => a.id === parseInt(this.props.match.params.candyId)) || {}

        return (
            <section className="candy">
                <div key={candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        {candy.name}
                        </h4>
                        { this.props.hasOwnProperty("types") && 
                            <div>
                                a {' '}
                                {
                                    this.props.types.find(
                                        type => type.id === candy.typeId
                                    ).name
                                } candy
                            </div>
                            }
                        <a href="#" onClick={() => this.props.deleteCandy(candy.id)} className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}