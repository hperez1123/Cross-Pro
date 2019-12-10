import React from 'react';
import Login from './Login';
import Register from './Register';
import ProfileListing from './ProfileListing'
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

export default function Main(props) {
  console.log(props)
  return (
    <div id="main">
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
      <Route path="/businesses" render={() => <ProfileListing />} />
    </div>
  )
}