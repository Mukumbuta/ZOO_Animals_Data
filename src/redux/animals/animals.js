export const ANIMALS_FETCHED = 'ANIMALS_FETCHED';

const initialState = [{
  data: [],
  loading: false,
}];

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANIMALS_FETCHED:
      return action.animals;
    default:
      return state;
  }
};

export default animalsReducer;
