import React from 'react';
import exportToExcel from './exportToExcel';

const ExportButton = ({ tableData }) => {
  const handleExport = () => {
    // Call the export function with table data and file name
    exportToExcel(tableData, 'exported_data');
  };

  return (
    <button onClick={handleExport}>Export to Excel</button>
  );
};

export default ExportButton;
