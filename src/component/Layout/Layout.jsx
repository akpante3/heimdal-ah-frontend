/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Header from '../ui/header/Header';

class Layout extends Component {
  state = {
    isAuthenticated: false,
  }

  render() {
    const { isAuthenticated } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Header isValidated={isAuthenticated} />
        {children}
      </div>
    );
  }
}
export default Layout;
