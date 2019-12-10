import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <header id="header">
      <Link to="/"><h2 id="hero">Cross - Promote</h2></Link>
      {
        props.currentBusiness ?
          <>
            <Link to="/">Home</Link>
            <Link to="/login" onClick={props.handleLogout}>Log out</Link>
          </>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
      }
    </header>
  )
}