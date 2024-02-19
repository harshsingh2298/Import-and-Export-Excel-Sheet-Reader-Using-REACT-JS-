import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';

function EmployeeTable() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const getuserdata = async () => {
      try {
        const userreq = await fetch("http://localhost:3001/components");
        if (userreq.ok) {
          const userres = await userreq.json();
          setUserdata(userres);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getuserdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h4 className="mt-3 mb-3 text-xl font-bold">Export Data in Excel</h4>
        <CSVLink data={userdata} filename="User_Data.csv" className="btn btn-success mb-3">Export User Data</CSVLink>
        
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Password</th>
              <th className="py-2 px-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((getuser, index) => (
              <tr key={getuser.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{getuser.name}</td>
                <td className="py-2 px-4">{getuser.email}</td>
                <td className="py-2 px-4">{getuser.password}</td>
                <td className="py-2 px-4">{getuser.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default EmployeeTable;
