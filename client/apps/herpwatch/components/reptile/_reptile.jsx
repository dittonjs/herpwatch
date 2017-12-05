import React from 'react';

export default class Reptile extends React.Component {
  render() {
    const { reptile } = this.props;
    const genderIconClass = reptile.sex === 'F' ? 'fa fa-venus' : 'fa fa-mars';
    return (
      <div className="c-tile">
        <div className="c-tile-item">
          <div className="c-tile-item__top">
            <div className="c-icon--tile">
              <i className={genderIconClass} aria-hidden="true" />
            </div>
          </div>
          <div className="c-tile-item__bottom">{this.props.reptile.name}</div>
        </div>
      </div>
    );
  }
}
