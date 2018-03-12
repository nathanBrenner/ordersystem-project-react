import React from 'react';
import Table from './Table';

const EntityTable = ({ title, columns, entities }) => (
  <div className="row">
    <div className="col-md-12">
      <h1>{title}</h1>
      <Table columns={columns} entities={entities} />
    </div>
  </div>
);

export default EntityTable;
