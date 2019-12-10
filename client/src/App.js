import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Profile from './components/Profile';
import BusinessContainer from './components/BusinessContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { verifyBusiness } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBusiness: null
    }
  }

  async componentDidMount() {
    const currentBusiness = await verifyBusiness()
    if (currentBusiness) {
      this.setState({ currentBusiness })
    }
  }

  handleLogout = () => {
    this.setState({ currentBusiness: null });
    localStorage.removeItem('authToken');
    this.setState({
      currentBusiness: null,
      authErrorMessage: "",
    });
  }


  render() {
    return (
      <div className="App">
        <Header
          currentBusiness={this.state.currentBusiness}
          handleLogout={this.handleLogout} />
        <BusinessContainer currentBusiness={this.state.currentBusiness} />
        {/* <Profile currentBusiness={this.state.currentBusiness} />
        <Main currentBusiness={this.state.currentBusiness} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
