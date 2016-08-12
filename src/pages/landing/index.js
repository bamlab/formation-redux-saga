import React, { Component } from 'react';
// react-redux allows us to easily connect redux and react
import { connect } from 'react-redux';

export class LandingPage extends Component {
  render() {
    return (
      <h3 className="title">Question pour un champion</h3>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
