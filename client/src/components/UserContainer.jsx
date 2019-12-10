import React from 'react'
import Login from './Login'
import Register from './Register'
import Header from './Header'

export default class UserContainer extends React.Component {
  state = {

  }

  render() {
    return (

      <>

        <Header currentBusinessId={this.props.currentBusinessId}
          currentBusinessName={this.props.currentBusinessName}
          currentBusinessIndustry={this.props.currentBusinessIndustry}
          currentBusinessImage_url={this.props.currentBusinessImage_url}
          handleLogout={this.props.handleLogout}
        />

        <Login handleLogin={this.props.handleLogin} />

        <Register handleRegister={this.props.handleRegister} />

      </>
    )
  }
}