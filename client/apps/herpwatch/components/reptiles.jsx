import * as React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from './common/header';
import Reptile from './reptile/_reptile';
import NewReptileModal from './reptile/new_reptile_modal';
import { getReptiles, getSpecies } from '../actions/reptile';

const select = ({ reptile }) => ({
  reptiles: reptile.reptiles,
});

@connect(select, { getReptiles, getSpecies })
export default class Reptiles extends React.Component {
  state = {
    newReptileOpen: false,
  }

  componentWillMount() {
    this.props.getReptiles();
    this.props.getSpecies();
  }

  get reptiles() {
    return _.map(this.props.reptiles, reptile => (
      <Reptile key={reptile._id} reptile={reptile} />
    ));
  }

  openNewReptile(newReptileOpen) {
    this.setState({ newReptileOpen });
  }

  render() {
    return (
      <div>
        <Header openNewReptile={e => this.openNewReptile(e)} />
        <NewReptileModal
          openNewReptile={e => this.openNewReptile(e)}
          open={this.state.newReptileOpen}
        />
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
