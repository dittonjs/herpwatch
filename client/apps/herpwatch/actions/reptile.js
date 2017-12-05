import wrapper from 'atomic-fuel/libs/constants/wrapper';
import Network from 'atomic-fuel/libs/constants/network';

const actions = [];

const requests = [
  'CREATE_REPTILE',
  'GET_REPTILES',
  'GET_SPECIES'
];

export const Constants = wrapper(actions, requests);

export const createReptile = reptile => ({
  type: Constants.CREATE_REPTILE,
  url: '/reptiles',
  method: Network.POST,
  body: {
    ...reptile,
  }
});

export const getReptiles = () => ({
  type: Constants.GET_REPTILES,
  method: Network.GET,
  url: '/reptiles',
});

export const getSpecies = () => ({
  type: Constants.GET_SPECIES,
  method: Network.GET,
  url: '/species',
});
