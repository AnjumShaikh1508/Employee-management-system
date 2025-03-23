import axios from 'axios';

const API_URL = 'https://employee-management-system-9gn4.onrender.com/api/employees';

export const getEmployees = async () => axios.get(API_URL);
export const getEmployeeById = async (id) => axios.get(`${API_URL}/${id}`);
export const createEmployee = async (data) => axios.post(API_URL, data);
export const updateEmployee = async (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteEmployee = async (id) => axios.delete(`${API_URL}/${id}`);