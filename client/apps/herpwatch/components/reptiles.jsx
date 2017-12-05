import * as React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from './common/header';
import Reptile from './reptile/_reptile';
import NewReptileModal from './reptile/new_reptile_modal';

const select = ({ reptile }) => ({
  reptiles: reptile.reptiles,
  species: reptile.species
});

@connect(select)
export default class Reptiles extends React.Component {

  get reptiles() {
    return _.map(this.props.reptiles, reptile => (
      <Reptile key={reptile._id} reptile={reptile} />
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <NewReptileModal species={this.props.species} />
        <div className="c-main">
          <div className="c-main__contain">
            <div className="c-tile-view">
              <div className="c-row">
                {this.reptiles}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
