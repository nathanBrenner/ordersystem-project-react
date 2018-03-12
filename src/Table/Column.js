import React from 'react';

const Column = ({ column }) => <th key={column.mapTo}>{column.title}</th>;

export default Column;
