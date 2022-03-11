import React from 'react';

import { NavLink } from "react-router-dom";

class VoyageCard extends React.Component {
    render() {
        return (
            <div className="feed-card rounded-md m-3">
                <div className="flex mt-2">
                    <div className="card-img mr-5 py-4 my-2">
                        <img className='rounded-right-md' src={this.props.image} alt=""/>
                    </div>
                    <div className="card-text flex flex-col align-center justify-center">
                        <p className="text-2xl mb-2 text-black">{this.props.title}</p>
                        <p className="text-xl mb-2 text-black">{this.props.location}</p>

                        <NavLink to={"/voyage/" + this.props.id }>
                            <button className={"btn btn-outline my-5"} type={"button"}>
                                <span className={"btn-text"}>Consulter</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default VoyageCard;