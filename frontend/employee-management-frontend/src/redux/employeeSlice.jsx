import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch employee by ID
export const fetchEmployeeById = createAsyncThunk(
  'employee/fetchEmployeeById',
  async (id) => {
    const response = await axios.get(`https://employee-management-system-9gn4.onrender.com/api/employees/${id}`);
    return response.data;
  }
);

// Update employee
export const updateEmployee = createAsyncThunk(
  'employee/updateEmployee',
  async ({ id, formData }) => {
    await axios.put(`https://employee-management-system-9gn4.onrender.com/api/employees/${id}`, formData);
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateEmployee.fulfilled, () => {
        alert('Employee updated successfully!');
      });
  },
});

export default employeeSlice.reducer;
