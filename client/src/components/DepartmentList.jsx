import React from 'react';
import { getAllDepartments, indexEmployees, showEmployeesById } from '../services/api-helper'
import { Link } from 'react-router-dom';

export default class DepartmentList extends React.Component {
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
    if (props.currentBusiness && prevProps.currentBusiness !== this.props.currentBusiness) {
      const departments = await getAllDepartments(this.props.currentBusiness.id)
      this.setState({ departments })
    }
  }

  // async showAllEmployees() {
  //   if (this.props.currentBusiness.departments) {
  //     const employees = await indexEmployees(this.props.currentBusiness.departments.id)
  //     this.setState({ employees })
  //   }
  // }

  // async componentDidUpdate(prevProps) {
  //   if (prevProps.currentBusiness.departments !== this.props.currentBusiness.departments) {
  //     const employees = await indexEmployees(this.props.currentBusiness.departments.id)
  //     this.setState({ employees })
  //   }
  // }






  render() {
    const { currentBusiness } = this.props
    return (
      <div>
        {
          currentBusiness &&
          <h3>Hello {currentBusiness.name}</h3>
        }

        {
          this.state.departments &&
          this.state.departments.map(profile => (
            <div key={profile.id}>
              <h4>{profile.name} Department</h4>
              {
                this.state.employees &&
                this.state.employees.map(employee => (
                  <div>{employee.name} </div>
                ))
              }
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