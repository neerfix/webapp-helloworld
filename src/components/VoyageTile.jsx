import React from 'react';

import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

class VoyageTile extends React.Component {
    render() {
        return (
            <div className="voyage-tile-card rounded-lg overflow-hidden m-3">
                <div className="flex mt-2">
                    <div className="card-img">
                        <img loading="lazy" className='card-img-bg' src={this.props.image} alt=""/>
                    </div>

                    <NavLink className="w-full" to={"/voyage/" + this.props.id }>
                        <div className="card-text p-3 flex items-center justify-between">
                            <p className="text-xl text-brown mr-3">{this.props.title}</p>
                                <button className={"btn btn-icon btn-outline rounded-full"} type={"button"}>
                                    <BsArrowRightShort />
                                </button>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default VoyageTile;