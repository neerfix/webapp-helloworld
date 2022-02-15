import React from 'react';

class DestinationCard extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="destination-card">
                <div>
                    <div>
                        <img src={this.props.img} alt={this.props.country} />
                    </div>
                    <div>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.country}</p>
                    </div>
                </div>
            </a>
        );
    }
}

export default DestinationCard;