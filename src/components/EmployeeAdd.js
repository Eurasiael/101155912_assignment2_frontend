import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EmployeeAdd(props) {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  let { id } = useParams();
  let navigation = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const update = async (e) => {
    e.preventDefault();

    let user = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
    };

    await axios
      .put(`/api/v1/employees/${id}`, user)
      .then((res) => {
        alert(res.data);
        navigation(`/employee/${id}`);
      })
      .catch((err) => {
        alert(`error: ${err.response.data.message}`);
        console.log(`error: ${err.response.data.message}`);
      });
  };

  const submit = async (e) => {
    e.preventDefault();

    let new_user = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
    };

    await axios
      .post("/api/v1/employees", new_user)
      .then((res) => {
        alert(res.data);
        navigation("/employees");
      })
      .catch((err) => {
        alert(`error: ${err.response.data.message}`);
        console.log(`error: ${err.response.data.message}`);
      });
  };

  const fetchData = async (id) => {
    await axios
      .get(`/api/v1/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <div>
      <h3>{id ? "Update Employee" : "Add Employee"}</h3>
      <form onSubmit={id ? update : submit}>
        <div className="mb-3">
          <label htmlFor="firstNameInput" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            name="firstName"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastNameInput" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            name="lastName"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="emailId"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeAdd;
