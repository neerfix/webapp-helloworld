import React from 'react'

class PassportStatCard extends React.Component {
	constructor(props) {
		super(props);
		this.number = props.number
		this.title = props.title
		this.subtitle = props.subtitle
	}
	
	render() {
		return (
			<div className={"bg-white px-4 py-2 " + this.props.className}>
				<h2 className={"text-brown font-bold"}>{this.number + ' ' + this.title}</h2>
				<p className={"text-sm"}>{this.subtitle}</p>
			</div>
		)
	}
}

export default PassportStatCard