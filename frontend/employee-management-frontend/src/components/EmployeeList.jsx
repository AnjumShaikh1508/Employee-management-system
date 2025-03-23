import React, { useEffect, useState } from 'react';
import { deleteEmployee, getEmployees } from '../api/api';
import { Link } from 'react-router-dom';
import '../CSS/employeeList.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        const response = await getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await deleteEmployee(id);
        setEmployees(employees.filter(employee => employee._id !== id));
        alert('Employee deleted successfully!');
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  return (
    <div className="employee-list-container">
      <div className="employee-list-header">
        <h1 className="employee-list-title">Employee List</h1>
        <Link to="/add" className="add-employee-button">Add Employee</Link>
      </div>
      
      {isLoading ? (
        <div className="loading-indicator">Loading employees...</div>
      ) : employees.length === 0 ? (
        <div className="no-employees-message">No employees found. Add some employees to get started.</div>
      ) : (
        <div className="employee-table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id} className="employee-row">
                  <td className="employee-name">{employee.name}</td>
                  <td className="employee-position">{employee.position}</td>
                  <td className="employee-contact">{employee.contact || 'N/A'}</td>
                  <td className="employee-actions">
                    <Link to={`/edit/${employee._id}`} className="edit-button">Edit</Link>
                    <button onClick={() => handleDelete(employee._id)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;