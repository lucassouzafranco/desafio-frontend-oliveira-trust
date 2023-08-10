import React from 'react';
import { CSVLink } from 'react-csv';
import './CSVExportButton.css';

function CSVExportButton({ data, headers, filename, buttonText }) {
  return (
    <CSVLink
      data={data}
      headers={headers}
      filename={filename}
      className='exportButton'
    >
      <h4>{buttonText}</h4>
    </CSVLink>
  );
}

export default CSVExportButton;
