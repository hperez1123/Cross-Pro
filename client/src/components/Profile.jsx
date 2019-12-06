import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
    const { currentBusiness } = this.props
    return (
      <div>
        {
          currentBusiness &&
          <h2>{currentBusiness.name}</h2>
        }
        <Link to="/businesses">Check Profiles</Link>
      </div>
    )
  }
}