import React from "react";

export default function EmployeeDetail({ details }) {
  return (
    <div className="thumbnail">
      <img src={details.avatar} />
      <div className="caption">
        <h3>{details.name}</h3>
      </div>
      <ul>
        <li className="list-group-item">Email: {details.email}</li>
        <li className="list-group-item">Phone: {details.phone}</li>
      </ul>
    </div>
  );
}
