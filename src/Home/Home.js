import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Awesome, Inc. Internal Ordering System'
		}
	}
	render() {
		return (
			<div className="row">
    		<h1>{this.state.title}</h1>
			</div>
		)
	}
}

export default Home;