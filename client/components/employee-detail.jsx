import React from "react";

export default function EmployeeDetail({ details }) {
  return (
    <div>
      <div className="thumbnail">
        <img src={details.avatar} />
      </div>
      <div className="caption">{details.name}</div>

      <label>{details.email}</label>
      <label>{details.phone}</label>
    </div>
  );
}
