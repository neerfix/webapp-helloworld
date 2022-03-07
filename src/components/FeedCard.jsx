import React from 'react';

class FeedCard extends React.Component {
    render() {
        return (
            <div className="px-5 py-5 feed-card rounded-md">
                <p className="text-4xl mb-2 text-black">{this.props.voyage}</p>
                <p className="text-uppercae text-brown">◆ Nouvelle étape le {this.props.date}</p>
                <div className="flex mt-2">
                    <div className="card-img mr-5 py-4 my-2">
                        <img className='rounded-right-md' src={this.props.voyage_img} alt=""/>
                    </div>
                    <div className="card-text flex flex-col align-center justify-center">
                        <p className="text-xl md:text-2xl">{this.props.step}</p>
                        <a className="card-user flex items-center my-2" href={"/passport/" + this.props.userId}>
                            <img className="rounded-md mr-2" src={this.props.user_img} width="50" height="50" alt="" />
                            <span>
                                {this.props.user}
                            </span>
                        </a>
                        <a className="btn btn-outline" href={"/voyage/" + this.props.voyageId}>
                            <span className="btn-text">Découvrir</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedCard;