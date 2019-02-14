import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends React.Component {
  renderLinks = () => {
    if (this.props.auth.authenticated.length > 0) {
      return (
        <div className="header">
          <Link to='/'>Redux Auth</Link>
          <Link to='/signout'>Sign Out</Link>
          <Link to='/feature'>Feature</Link>
        </div>
      );
    } else {
      return (
        <div className="header">
          <Link to='/'>Redux Auth</Link>
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    }
  };
  render() {
    return this.renderLinks();
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
