import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeDetail from "./components/EmployeeDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Top />
          <Routes>
            <Route element={<EmployeeList />} path="/" />
            <Route element={<EmployeeList />} path="/employees" />
            <Route element={<EmployeeAdd />} path="/employee/add" />
            <Route element={<EmployeeAdd />} path="/employee/update/:id" />
            <Route element={<EmployeeDetail />} path="/employee/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
