import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

function EmployeeDetail() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [id]);

  return (
    <div>
      <h3>Employee Details</h3>
      <ListGroup>
        <ListGroup.Item>
          <span>First Name:</span> <b>{employee.firstName}</b>
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Last Name:</span> <b>{employee.lastName}</b>
        </ListGroup.Item>
        <ListGroup.Item>
          <span>Email ID:</span> <b>{employee.emailId}</b>
        </ListGroup.Item>
      </ListGroup>
      <Link to="/employees" className="btn btn-danger mt-4">
        Back
      </Link>
    </div>
  );
}

export default EmployeeDetail;
