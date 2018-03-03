import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
						<Link to="/home" className="navbar-brand">{this.state.companyName}</Link>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><Link to="/customers">Customers</Link></li>
							<li><Link to="/products">Products</Link></li>
							<li><Link to="/orders">Orders</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;