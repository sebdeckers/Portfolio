import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './LandingAbout.css';

class LandingAbout extends Component {
  render() {
    return (
      <Grid fluid>
      <div>
         <h1>About Me</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="social-links"></div>
        <div className="Resume"></div>
      </div>
      </Grid>
    );
  }
}

export default LandingAbout;
