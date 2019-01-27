import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import { autheticateUser } from '../../../actions/SocialAuthActions/socialAuth';

/**
     * the social authentication component
     *
     * @namespace SocialAuth
     * @memberof app.components
     */
class SocialAuth extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    const { token } = queryString.parse(location.search);
    if (token) {
      this.props.autheticateUser(token);
      history.push('/');
    }
  }

  /**
     * Renders the component.
     *
     * @memberof app.components.SocialAuth
     * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <Fragment />
    );
  }
}

SocialAuth.propTypes = {
  autheticateUser: PropTypes.func.isRequired,
};

export default connect(null, { autheticateUser })(SocialAuth);