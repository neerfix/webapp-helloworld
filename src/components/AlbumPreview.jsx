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
					src={"./images/cities/new-york.png"}
					alt={"ny"}
				/>
				<img
					className={"h-full w-full rounded-xl"}
					src={"./images/cities/new-zealand.png"}
					alt={"nz"}
				/>
				<img
					className={"h-full w-full rounded-xl"}
					src={"./images/cities/rome.png"}
					alt={"rm"}
				/>
				<div className={"album-photo-more"}>
					<div className={"album-photo-overlay"}>
						<span className={"text-3xl font-bold text-white"}>5+</span>
					</div>
					<img
						className={"h-full w-full rounded-xl"}
						src={"./images/cities/rome.png"}
						alt={"rm"}
					/>
				</div>
			</div>
		)
	}
}

export default AlbumPreview;