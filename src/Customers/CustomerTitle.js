import React from 'react';

export function CustomerTitle(props) {
	return (
		<div className="row">
			<h1>{props.title}: {props.name}</h1>
		</div>
	)
}
