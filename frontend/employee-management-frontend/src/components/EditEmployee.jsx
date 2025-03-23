import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../CSS/AddEmployee.css';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`https://employee-management-system-9gn4.onrender.com/api/employees/${id}`);
        const { name, position, salary } = response.data;
        setName(name);
        setPosition(position);
        setSalary(salary);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, position, salary: parseFloat(salary) };

    try {
      await axios.put(`https://employee-management-system-9gn4.onrender.com/api/employees/${id}`, formData);
      alert('Employee updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee.');
    }
  };

  return (
    <div className="add-employee-container">
      <h2 className="add-employee-title">Edit Employee</h2>
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
          />
        </div>
        <button type="submit" className="submit-button">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
