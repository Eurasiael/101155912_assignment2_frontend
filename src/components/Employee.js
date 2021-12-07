import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Employee(props) {
  const employeeID = props.user.employeeID;
  const firstName = props.user.firstName;
  const lastName = props.user.lastName;
  const emailId = props.user.emailId;

  return (
    <tr>
      <td>{employeeID}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{emailId}</td>
      <td>
        <Link
          to={{ pathname: `/employee/${employeeID}` }}
          className="btn btn-primary"
        >
          View
        </Link>
        <Link
          to={{ pathname: `/employee/update/${employeeID}` }}
          className="btn btn-primary"
        >
          Update
        </Link>
        <Button
          className="btn btn-danger"
          onClick={() => props.btnDeleteUser(employeeID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Employee;
