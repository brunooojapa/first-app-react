import React, { Component } from 'react';
import { Link } from 'react-router'


class Header extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation"><Link to="/" activeClassName="active">Home</Link></li>
            <li role="presentation"><Link to="about" activeClassName="active">About</Link></li>
            <li role="presentation"><Link to="contact" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
        <h3 className="text-muted">First react app</h3>
      </div>
    )
  }
}

export default Header;