import React from 'react';

export const CustomerTitle = ({ title, name }) => (
  <div className="row">
    <h1>
      {title}: {name}
    </h1>
  </div>
);
