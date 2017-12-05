import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createReptile } from '../../actions/reptile';

const select = ({ reptile }) => ({
  species: reptile.species
});

@connect(select, { createReptile })
export default class NewReptileModal extends React.Component {

  get speciesOptions() {
    return _.map(this.props.species, s => (
      <option key={s._id} value={s._id}>{s.name}</option>
    ));
  }

  handleSubmit(e) {
    const reptile = {
      name: e.target.name.value,
      birthday: null,
      age: parseInt(e.target.age.value, 10),
      weightsIds: [],
      feedingsIds: [],
      shedsIds: [],
      genesIds: [],
      regularFeedingDay: null,
      regularFood: null,
      speciesId: parseInt(e.target.species.value, 10),
      img: null,
      sex: e.target.gender.value,
      breeder: e.target.breeder.checked,
      forSale: false,
      price: null
    };
    this.props.createReptile(reptile);
    this.props.openNewReptile(false);
  }

  render() {
    if (!this.props.open) return null;
    return (
      <div>
        <div className="j-modal">
          <div className="main-body">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="name">Reptile Name</label>
                <input
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  className="form-control"
                  id="age"
                  placeholder="Age"
                />
              </div>
              <div className="form-group">
                <label htmlFor="species">Species</label>
                <select className="form-control" id="species">
                  {this.speciesOptions}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
              <div className="form-check">
                <label htmlFor="breeder" className="form-check-label">
                  <input name="breeder" className="form-check-input" type="checkbox" value="" />
                  Breeder
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="bottom">
            {/* <button>Save</button> */}
          </div>
        </div>
        <div onClick={() => this.props.openNewReptile(false)}className="overlay" />
      </div>
    );
  }
}
