import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                            <Link className="nav-link" to={`/candies/${candy.id}`}>Details</Link>
                        </div>
                        )
                }
            </section>
        );
    }
}