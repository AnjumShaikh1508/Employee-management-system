import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;