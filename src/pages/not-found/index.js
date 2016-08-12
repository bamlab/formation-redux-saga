import React, { Component } from 'react';

export class NotFoundPage extends Component {
  render() {
    return (
      <img src={require('./404.png')} alt="404" style={{border: 0, width: 600, margin: 30}} />
    );
  }
}

export default NotFoundPage;
