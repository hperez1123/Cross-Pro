import React from 'react';
import { getAllBusinesses } from '../services/api-helper'
import { Link } from 'react-router-dom';

export default class ProfileListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
  }

  async componentDidMount() {
    const businesses = await getAllBusinesses();
    this.setState({ businesses })
  }

  render() {
    return (
      <div id="homos">
        {
          this.state.businesses.map(business => (
            <div id="listing" key={business.id}>
              <Link to={`/businesses/${business.id}`}>
                <h4>{business.name}</h4></Link>
              <h4>{business.industry}</h4>
              <img src={business.image_url} alt="Logo" />
              <h4>{business.mission}</h4>
              <h4>{business.motto}</h4>
            </div>
          )
          )}
      </div>
    )
  }
}