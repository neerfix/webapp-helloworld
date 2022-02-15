import React from 'react';

class DestinationCard extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="destination-card">
                <div className='flex'>
                    <div class="card-img mr-3 py-4 my-2">
                        <img src={this.props.img} alt={this.props.country} />
                    </div>
                    <div class="card-text flex flex-col align-center justify-center">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.country}</p>
                        <button className="btn btn-outline mx-auto my-5">
                            <span className="btn-text">Découvrir</span>
                        </button>
                    </div>
                </div>
            </a>
        );
    }
}

export default DestinationCard;