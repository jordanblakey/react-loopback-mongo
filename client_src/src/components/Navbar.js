import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a className="brand-logo" href="/">{'Meetupz'}</a>
            <a className="button-collapse show-on-large"
              data-activates="main-menu"
            >
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only" id="nav-mobile">
              <li>
                <Link to="/">
                  <i className='fa fa-users' />
                  {'Meetups'}
                </Link>
              </li>
            </ul>

            <ul className="side-nav" id="main-menu" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
