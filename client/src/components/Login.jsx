import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loginBusiness } from '../services/api-helper';

class Login extends Component {
  state = {
    formData:
    {
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
    const response = await loginBusiness(this.state.formData)
    console.log(response)
    this.props.history.push("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="log-register-page">
        <h2 className="spacing">Log In</h2>
        <label htmlFor='name' className="log-register-text">Business Name</label>
        <input
          className="space2"
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='password' className="log-register-text">Password</label>
        <input
          className="spacing"
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="button-log-register">Login</button>
      </form>
    )
  }
}

export default withRouter(Login)