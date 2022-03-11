import React from 'react';

// Component
import AlbumPreview from "@/components/AlbumPreview";

class VoyageStepCard extends React.Component {
    render() {
        return (
            <div>
                <div className="px-5 py-5 voyage-step-card rounded-md">
                    <p className="text-2xl mb-2 text-black capitalize">étape {this.props.number}</p>
                    <p className="text-uppercase text-brown mt-3">◆ {this.props.place} </p>
                    <p className="text-uppercase text-brown mt-1 mb-3">Du {this.props.dateStart} au {this.props.dateEnd} </p>
                    <p className="text-uppercase text-brown my-5">{this.props.description} </p>
                    
                    <AlbumPreview album={this.props.album} />
                </div>
                <hr className="mx-20 my-10 opacity-30"/>
            </div>
        );
    }
}

export default VoyageStepCard;