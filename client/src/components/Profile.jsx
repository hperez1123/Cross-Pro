import React from 'react';
import { getAllDepartments, indexEmployees, showEmployeesById } from '../services/api-helper'

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
          <h2>Hello {currentBusiness.name}</h2>
        }

        {
          this.state.departments &&
          this.state.departments.map(department => (
            <div key={department.id}>
              <Link to={`/departments/${department.id}`}>
                <h1>{department.name} Department</h1>
              </Link>
              <div className="department-employees">
                {
                  department.employees.map(employee => (
                    <Link to={`/departments/${department.id}/employees/${employee.id}`}>
                      <div className="home-employee-deets">{employee.name}
                        <img src={employee.image_url} />
                        <p>{employee.title}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
              <Link to={`/departments/${department.id}/new-employee`}>
                <button>Add Employee</button>
              </Link>
            </div>
          ))
        }


        {
          currentBusiness &&
          <Link to="/businesses">Check Profiles</Link>
        }
      </div>
    )
  }
}