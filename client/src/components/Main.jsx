import React from 'react';
import Login from './Login';
import Register from './Register';
import ProfileListing from './ProfileListing'
import Profile from './Profile';
import DepartmentProfile from './DepartmentProfile';
import EmployeeProfile from './EmployeeProfile';
import EmployeeForm from './EmployeeForm';
import EmployeeUpdateForm from './EmployeeUpdateForm';
import ProfileView from './ProfileView';
import { Route } from 'react-router-dom';

export default function Main(props) {
  const { currentBusiness } = props
  return (
    <div id="main">
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
      <Route exact path="/businesses" render={() => <ProfileListing />} />
      <Route exact path="/" render={() =>
        <Profile currentBusiness={currentBusiness} />} />
      
      <Route exact path="/businesses/:business_id" render={(props) =>
        <ProfileView businessId={props.match.params.business_id}/>} /> 

      <Route exact path="/departments/:department_id" render={(props) =>
        <DepartmentProfile
          departmentId={props.match.params.department_id}
        />} />

      <Route exact path="/departments/:department_id/new-employee" render={(props) =>
        <EmployeeForm
          currentBusiness={currentBusiness}
          departmentId={props.match.params.department_id}
        />} />

      <Route exact path="/departments/:department_id/employees/:employee_id" render={(props) =>
        <EmployeeProfile
          currentBusiness={currentBusiness}
          departmentId={props.match.params.department_id}
          employeeId={props.match.params.employee_id}
        />} />

      <Route exact path="/departments/:department_id/employees/:employee_id/update" render={(props) =>
        <EmployeeUpdateForm
          currentBusiness={currentBusiness}
          departmentId={props.match.params.department_id}
          employeeId={props.match.params.employee_id}
        />} />
    </div>
  )
}