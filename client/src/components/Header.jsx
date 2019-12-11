import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <header id="header">
      <Link to="/"><h1 id="hero">Cross - Promote</h1></Link>
      {
        props.currentBusiness ?
          <>
            <Link to="/" ><button className="front-page-buttons">Home</button></Link>
            <Link to="/login" onClick={props.handleLogout}><button className="front-page-buttons">Log out</button></Link>
          </>
          :
          <>
            <Link to="/login"><button className="front-page-buttons">Login</button></Link>
            <Link to="/register"><button className="front-page-buttons">Sign Up</button></Link>
          </>
      }
    </header>
  )
}