import React, { Component } from 'react';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: 'Awesome, Inc.'
		}

	}
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">{this.state.companyName}</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><a>Customers</a></li>
							<li><a href="/">Products</a></li>
							<li><a href="/">Orders</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;