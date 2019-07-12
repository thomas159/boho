import {
  SET_LANGUAGE
} from '../Constants'

const initialState = 'english'

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language
    default:
      return state;
  }
};

export default languageReducer;

