import React, { Component } from 'react';
// @ts-ignore
import {Link} from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about">ABOUT</Link>
        <br />
        <Link to="report">WEATHER REPORT</Link>
      </div>
    )
  }
}

export default Home
