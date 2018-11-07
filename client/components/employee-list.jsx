import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import EmployeeDetail from "./employee-detail";

import { Employees } from "../../imports/collections/employees";
import { Meteor } from "meteor/meteor";

function EmployeeList(props) {
  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => {
          return <EmployeeDetail key={employee._id} details={employee} />;
        })}
      </div>
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe("employees");

  return {
    employees: Employees.find({}).fetch()
  };
})(EmployeeList);
