import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/AddEmployee.css'

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name,
            position,
            salary: parseFloat(salary), // Ensure salary is sent as a number
        };
        
        try {
            await axios.post('http://localhost:5000/api/employees', formData);
            alert('Employee added successfully!');
            setName('');
            setPosition('');
            setSalary('');
        } catch (error) {
            console.error("Error adding employee:", error);
            alert('Error adding employee.');
        }
    };
    
    return (
        <div className="add-employee-container">
            <h2 className="add-employee-title">Add New Employee</h2>
            <form onSubmit={handleSubmit} className="add-employee-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter employee name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position" className="form-label">Position:</label>
                    <input
                        type="text"
                        id="position"
                        className="form-input"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                        placeholder="Enter job position"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary" className="form-label">Salary:</label>
                    <input
                        type="number"
                        id="salary"
                        className="form-input"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                        placeholder="Enter annual salary"
                    />
                </div>
                <button type="submit" className="submit-button">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;