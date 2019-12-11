import React from 'react';
import { getAllDepartments } from '../services/api-helper'

import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departments: [],
      employees: []
    }
    console.log(props)
  }

  async componentDidMount() {
    if (this.props.currentBusiness) {
      const departments = await getAllDepartments(this.props.currentBusiness.id)
      this.setState({ departments })
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currentBusiness !== this.props.currentBusiness) {
      const departments = await getAllDepartments(this.props.currentBusiness.id)
      this.setState({ departments })
    }
  }
  
  render() {
    const { currentBusiness } = this.props
    return (
      <div>
        {
          currentBusiness &&
          <Link to="/businesses"><button id="search-button">Come Check Other Profiles!</button></Link>
        }
      
        {
          currentBusiness &&
          <h3>Hello {currentBusiness.name}</h3>
        }
        {
          this.state.departments &&
          this.state.departments.map(department => (
            <div key={department.id} className="department-div">
              <Link to={`/departments/${department.id}`}>
                <h4>{department.name} Department</h4>
              </Link>
              <div className="department-employees">
                {
                  department.employees.map(employee => (
                    <Link to={`/departments/${department.id}/employees/${employee.id}`}>
                      <div className="home-employee-deets">{employee.name}
                        <img src={employee.image_url} alt="Portrait" className="portrait"/>
                        <p>{employee.title}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
              <Link to={`/departments/${department.id}/new-employee`}>
                <button id="add-employee">Add Employee</button>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}