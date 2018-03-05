import React from 'react';

export function CustomerAddress(props) {
	return (
		<div className="row">
			<div className="col-md-3">
				<b>Address:</b>
			</div>
			<div className="col-md-4 end">
				{props.address}
			</div>
		</div>
	)
}