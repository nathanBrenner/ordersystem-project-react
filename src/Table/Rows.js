import React from 'react';
import Row from './Row';
import { generateUUID } from '../fetchUtils';

const UniqueRow = (entity, columns) => (
  <Row key={generateUUID()} columns={columns} entity={entity} />
);

const MapRows = ({ entities, columns }) =>
  entities.map(entity => UniqueRow(entity, columns));

const Rows = ({ entities, columns }) => (
  <tbody>
    <MapRows entities={entities} columns={columns} />
  </tbody>
);

export default Rows;
