import React, { Component } from 'react';
// react-redux allows us to easily connect redux and react
import { connect } from 'react-redux';

export class ScorePage extends Component {
  render() {
    return (
      <h3 className="title">Score</h3>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScorePage);
