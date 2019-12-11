import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { showEmployee, destroyEmployee } from '../services/api-helper';

class EmployeeProfile extends React.Component {
  state = {
    employee: null
  }

  async componentDidMount() {
    const { currentBusiness, departmentId, employeeId } = this.props
    const employee = await showEmployee(currentBusiness.id, departmentId, employeeId)
    this.setState({
      employee
    })
  }

  handleDelete = async () => {
    const { currentBusiness, departmentId, employeeId } = this.props
    const firedEmployee = await destroyEmployee(currentBusiness.id, departmentId, employeeId)
    this.props.history.push("/")
  }

  render() {
    const { employee } = this.state
    const { departmentId } = this.props
    return (
      <div id="employee-profile">
        {
          employee &&
          <>
            <h4>{employee.name}</h4>
            <img src={employee.image_url} alt="Portrait" className="portrait"/>
            <h4>{employee.title}</h4>
            <h4>{employee.email}</h4>
            <p>{employee.phone}</p>
            <Link to={`/departments/${departmentId}/employees/${employee.id}/update`}>
              <button class="profile-buttons">Update Profile</button>
            </Link>
            <button onClick={this.handleDelete} className="profile-buttons">Fire {employee.name}</button>
          </>
        }
      </div>
    )
  }
}

export default withRouter(EmployeeProfile)