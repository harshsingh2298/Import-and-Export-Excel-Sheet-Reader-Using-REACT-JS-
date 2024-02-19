// App.js
import { useState } from "react";
import * as XLSX from "xlsx";

import './App.css';
import FormData from "./FormData";
import EmployeeTable from "./EmployeeTable";


function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mt-8 mb-4">Excel Data Management</h1>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="p-2 bg-blue-500 text-white rounded-md"
          />
        </div>
        
        {data.length > 0 && (
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <thead className="bg-gray-800 text-white">
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="px-4 py-2">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  {Object.values(row).map((value, index) => (
                    <td key={index} className="px-4 py-2">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <FormData/>
        <EmployeeTable/>
      </div>
    </>
  );
}

export default App;
