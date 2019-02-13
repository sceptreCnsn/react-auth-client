import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signout'>Sign Out</Link>
        <Link to='/feature'>Feature</Link>
      </div>
    );
  }
}

export default Header;
