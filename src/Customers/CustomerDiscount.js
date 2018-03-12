import React from 'react';

export const CustomerDiscount = ({ getsDiscount }) => (
  <div className="row">
    <div className="col-md-3">
      <b>Gets Discount:</b>
    </div>
    <div className="col-md-4 end">{getsDiscount}</div>
  </div>
);
