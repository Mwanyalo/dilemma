import React, { Component } from 'react'
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
    <div className="header">
      <h4>{ this.props.pageName }</h4>
    </div>
    )
  }
}

export default Header
