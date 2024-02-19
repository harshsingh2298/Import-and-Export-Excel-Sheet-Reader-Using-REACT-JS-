// FormData.js
import React, { useState } from 'react';
import axios from 'axios';

const FormData = () => {
    // State to hold employee data
    const [employeeData, setEmployeeData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
        // Add more fields as needed
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/components', employeeData);
            console.log(response.data);
            // Optionally, clear the form after successful submission
            setEmployeeData({
                name: '',
                email: '',
                password: '',
                phone: ''
                // Clear other fields as needed
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-stone-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" name="name" value={employeeData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" name="email" value={employeeData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" name="password" value={employeeData.password} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone:</label>
                    <input type="tel" name="phone" value={employeeData.phone} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormData;
