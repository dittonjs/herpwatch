const initialState = {
  reptiles: [{
    _id: 1,
    name: 'Carmen',
    birthday: '',
    age: 2,
    weightsIds: [],
    feedingsIds: [],
    shedsIds: [],
    regularFeedingDay: 'Thurs',
    regularFood: '100g Rat',
    genesIds: [],
    speciesId: null,
    img: '',
    sex: 'F',
    breeder: true,
    forSale: false,
    price: null,
    type: 'snake'
  }],
  species: [{
    _id: 1,
    name: 'Ball Python',
    scientificName: 'Python regius',
    dayTempRange: {
      low: 88,
      high: 92
    },
    nightTempRange: {
      low: 82,
      high: 85,
    },
    humidityRange: {
      low: 50,
      high: 80,
    },
    maxLength: 5,
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
