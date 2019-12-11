import React from 'react';
import { withRouter } from 'react-router-dom';
import { putEmployee, showEmployee } from '../services/api-helper';

class EmployeeUpdateForm extends React.Component {
  state = {
    employee: null,
    formData: {
      id: null,
      name: null,
      title: null,
      email: null,
      image_url: null,
      phone: null,
      department_id: null
    }
  }

  async componentDidMount() {
    const { currentBusiness, departmentId, employeeId } = this.props
    const employee = await showEmployee(currentBusiness.id, departmentId, employeeId)
    this.setState({
      employee,
      formData: {
        id: employee.id,
        name: employee.name,
        title: employee.title,
        email: employee.email,
        image_url: employee.image_url,
        phone: employee.phone,
        department_id: employee.department_id
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { currentBusiness, departmentId, employeeId } = this.props
    const { formData } = this.state
    const updatedEmployee = await putEmployee(currentBusiness.id, departmentId, employeeId, formData)
    console.log(updatedEmployee)
    this.props.history.push("/")
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  render() {
    console.log(this.state.formData)
    console.log(this.props)
    const { name, title, email, image_url, phone } = this.state.formData
    return (
      <div className="update-form">
        <p>employee form...</p>
        <form onSubmit={this.handleSubmit}>
          <label>name</label><input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label>Title</label><input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <label>Email</label><input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Phone</label><input
            type="number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <label>Portrait</label><input
            type="text"
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EmployeeUpdateForm)