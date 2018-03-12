import React from 'react';

export const CustomerAddress = ({ address }) => (
  <div className="row">
    <div className="col-md-3">
      <b>Address:</b>
    </div>
    <div className="col-md-4 end">{address}</div>
  </div>
);
