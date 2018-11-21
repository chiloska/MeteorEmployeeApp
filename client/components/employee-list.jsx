import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import EmployeeDetail from "./employee-detail";

import { Employees } from "../../imports/collections/employees";
import { Meteor } from "meteor/meteor";

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe("employees", PER_PAGE * (this.page + 1));
    this.page++;
  }

  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => {
            return <EmployeeDetail key={employee._id} details={employee} />;
          })}
        </div>
        <button
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary"
        >
          Load More
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("employees", PER_PAGE);

  return {
    employees: Employees.find({}).fetch()
  };
})(EmployeeList);
