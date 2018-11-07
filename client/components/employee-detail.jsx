import React from "react";

export default function EmployeeDetail(props) {
  return (
    <div>
      <div>
        <img src={props.details.avatar} />
      </div>
      <label>{props.details.name}</label>
      <label>{props.details.email}</label>
      <label>{props.details.phone}</label>
    </div>
  );
}
