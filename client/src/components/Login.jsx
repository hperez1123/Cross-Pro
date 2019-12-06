import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
      <div id="login-page">
        <form onSubmit={this.handleSubmit}>
          <div><h2>Log In</h2></div>
          <div>
            <label htmlFor='name'>name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor='password'>password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)