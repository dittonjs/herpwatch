import React from 'react';
import { hashHistory } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        <span onClick={() => hashHistory.push('/')}>Reptiles</span>
        <span onClick={() => hashHistory.push('/species')}>Species</span>
        <button className="icon-button" onClick={() => this.props.openNewReptile(true)}>
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
