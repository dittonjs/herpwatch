import _ from 'lodash';
import { Constants } from '../actions/reptile';

const initialState = {
  reptiles: [],
  species: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_REPTILES_DONE:
      return { ...state, reptiles: action.payload.reptiles };
    case Constants.GET_SPECIES_DONE:
      return { ...state, species: action.payload.species };
    case Constants.CREATE_REPTILE_DONE: {
      const newState = _.cloneDeep(state);
      newState.reptiles.push(action.payload.reptile);
      return newState;
    }
    default:
      return state;
  }
};
