import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
  let [employees, setEmployees] = useState([]);

  const deleteUser = async (_id) => {
    await axios
      .delete(`/api/v1/employees/${_id}`)
      .then((response) => {
        const data = employees.filter((user) => user._id !== _id);
        setEmployees(data);
        alert(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get("/api/v1/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Employee List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((user) => (
            <Employee user={user} key={user._id} btnDeleteUser={deleteUser} />
          ))}
        </tbody>
      </table>
      <Link className="btn btn-secondary" to="/employee/add">
        Add Employee
      </Link>
    </div>
  );
}

export default EmployeeList;
