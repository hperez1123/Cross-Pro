import React from 'react';
import { getBusiness, } from '../services/api-helper'
import { Link } from 'react-router-dom'


export default class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      business: null,
      departments: [],
      employees: []
    }
  }

  async componentDidMount() {
    const business = await getBusiness();
    this.setState({ business })
  }



  render() {
    return (
      <div>



        {
          this.state.departments &&
          this.state.departments.map(department => (
            <div key={department.id}>
              <Link to={`/departments/${department.id}`}>
                <h1>{department.name} Department</h1>
              </Link> </div>
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