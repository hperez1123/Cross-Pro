import React from 'react';
import { getBusiness, getAllDepartments } from '../services/api-helper'
import { Link } from 'react-router-dom'


export default class ProfileView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      business: {},
      departments: [],
      employees: []
    }
  }

  async componentDidMount() {
    const business = await getBusiness(this.props.businessId);
    const departments = await getAllDepartments(this.props.businessId)
    this.setState({ business, departments })
  }

  render() {
    return (
      <div>
        {
          this.state.departments &&
          this.state.departments.map(department => (
            <>
              <div key={department.id} className="department-div">
                <Link to={`/departments/${department.id}`}>
                  <h4>{department.name} Department</h4>
                </Link>
                <div className="department-employees">
                  {

                    department.employees.map(employee => (
                      <Link to={`/departments/${department.id}/employees/${employee.id}`}>
                        <div className="home-employee-deets">{employee.name}
                          <img src={employee.image_url} className="portrait"/>
                          <p>{employee.title}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </>
          ))
        }
        {/* {
          currentBusiness &&
          <Link to="/businesses">Check Profiles</Link>
        } */}

      </div>
    )
  }
}