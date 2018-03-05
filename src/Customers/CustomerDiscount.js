import React from 'react';

export function CustomerDiscount(props) {
	return (
		<div className="row">
			<div className="col-md-3">
				<b>Gets Discount:</b>
			</div>
			<div className="col-md-4 end">
				{props.getsDiscount}
			</div>
		</div>
	)
}