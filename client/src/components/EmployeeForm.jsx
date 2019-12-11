import React from 'react';
import { withRouter } from 'react-router-dom';
import { postEmployee } from '../services/api-helper';

class EmployeeForm extends React.Component {
  state = {
    formData: {
      name: null,
      title: null,
      email: null,
      image_url: null,
      phone: null,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { currentBusiness, departmentId } = this.props
    const { formData } = this.state
    formData.department_id = departmentId
    const newEmployee = await postEmployee(currentBusiness.id, departmentId, formData)
    console.log(newEmployee)
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

export default withRouter(EmployeeForm)