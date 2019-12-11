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
      <form onSubmit={this.handleSubmit} className="log-register-page">
        <h2 className="spacing">Register</h2>
        <label htmlFor='name'>Business Name</label>
        <input
          className="space2"
          type="text"
          name="name"
          id="name"
          value={this.state.profile}
          onChange={this.handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          className="spacing"
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="button-log-register">Create Profile</button>
      </form>
    )
  }
}

export default withRouter(Register);