import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        Reptiles
        <button className="icon-button">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
