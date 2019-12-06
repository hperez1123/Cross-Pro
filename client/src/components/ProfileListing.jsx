import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileListing extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
    const { getAllBusinesses } = this.props
    return (
      <div>
        {
          
          getAllBusinesses.results.map(lists => (
            <div>
              <h1>{lists.name}</h1>
            </div>
        )
        )}
      </div>
    )
  }
}