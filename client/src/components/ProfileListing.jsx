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
      <div>
        {
          this.state.businesses.map(business => (
            <div id="listing" key={business.id}>
              <Link to={`/businesses/${business.id}`}>
                <h1>{business.name}</h1></Link>
              <h3>{business.industry}</h3>
              <img src={business.image_url} />
              <h4>{business.mission}</h4>
              <h5>{business.motto}</h5>
            </div>
          )
          )}
      </div>
    )
  }
}