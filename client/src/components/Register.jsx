import React, { Component } from 'react';
import { registerBusiness } from '../services/api-helper';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  state = {
    formData: {
      name: "",
      password: ""
    }
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

  handleSubmit = async (e) => {
    e.preventDefault();
    registerBusiness(this.state.formData)
    this.props.history.push("/")
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="register-text-helper"><h2 id="register-text">Register</h2></div>
          <div>
            <label htmlFor='name'>Business Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.profile}
              onChange={this.handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="create">Create Profile</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Register);