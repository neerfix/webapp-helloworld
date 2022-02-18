import React from 'react'

class AlbumPreview extends React.Component {
	constructor(props) {
		super(props);
		this.album = props.album
	}
	
	render() {
		return (
			<div className={"grid grid-cols-4 gap-4"}>
				<img
					className={"h-full w-full rounded-xl"}
					src={this.props.album[0]}
					alt={"Photo 1"}
				/>
				{this.props.album[1] &&
					<img
						className={"h-full w-full rounded-xl"}
						src={this.props.album[1]}
						alt={"Photo 2"}
					/>
				}
				{this.props.album[2] &&
					<img
						className={"h-full w-full rounded-xl"}
						src={this.props.album[2]}
						alt={"Photo 2"}
					/>
				}
				{this.props.album[3] && this.props.album.length - 3 == 1 &&
					<img
						className={"h-full w-full rounded-xl"}
						src={this.props.album[2]}
						alt={"Photo 2"}
					/>
				}
				 {this.props.album[3] && this.props.album.length - 3 > 1 &&
					<div className={"album-photo-more"}>
						<div className={"album-photo-overlay"}>
							<span className={"text-3xl font-bold text-white"}>
								+ {this.props.album.length - 3}
							</span>
						</div>
						<img
							className={"h-full w-full rounded-xl"}
							src={this.props.album[3]}
							alt={"Photo 3"}
						/>
					</div>
				}
			</div>
		)
	}
}

export default AlbumPreview;